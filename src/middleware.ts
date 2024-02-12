import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./libs/auth";

interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string;
    role: string;
  };
}

let redirectToLogin = false;

export async function middleware(req: NextRequest) {
  const { url, nextUrl, cookies } = req;
  let { value: token } = cookies.get('token') ?? { value: null };

  if (!token) {
    token = req?.headers?.get("Authorization")?.substring(7) || null;
  }

  console.log("Token:", token);

  if (nextUrl.pathname.startsWith("/auth") && (!token || redirectToLogin)) {
    console.log("Skipping auth route");
    return;
  }

  if (
    !token &&
    (nextUrl.pathname.startsWith("/api/auth/logout"))
  ) {
    console.log("Unauthorized: Logging out");
    return new NextResponse(JSON.stringify({ message: "You are not logged in. Please provide a token to gain access." }), { status: 401 });
  }

  const response = NextResponse.next();

  try {
    if (token) {
      const { sub, role } = await verifyJWT<{ sub: string; role: string }>(token);
      console.log("User ID:", sub);
      console.log("User Role:", role);
      response.headers.set("X-USER-ID", sub);
      response.headers.set("X-USER-ROLE", role);
      (req as AuthenticatedRequest).user = { id: sub, role };
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    redirectToLogin = true;
    if (nextUrl.pathname.startsWith("/api")) {
      console.log("Unauthorized: API request");
      return new NextResponse(JSON.stringify({ message: "Token is invalid or user doesn't exist" }), { status: 401 });
    }

    console.log("Redirecting to auth");
    return NextResponse.redirect(
      new URL(`/auth?${new URLSearchParams({ error: "badauth" })}`, nextUrl.href)
    );
  }

  const authUser = (req as AuthenticatedRequest).user;

  console.log("Authenticated user:", authUser);

  if (!authUser) {
    console.log("Unauthorized: Not authenticated");
    return NextResponse.redirect(
      new URL(
        `/auth?${new URLSearchParams({
          error: "badauth",
          forceLogin: "true",
        })}`,
        nextUrl.href
      )
    );
  }

  if (nextUrl.pathname === "/auth" && authUser) {
    console.log("Redirecting authenticated user to home");
    return NextResponse.redirect(new URL("/", nextUrl.href));
  }


  if (authUser.role === 'user') {
    console.log("USERRRRRRRRRRRRR", authUser.role);
  }

  if (authUser.role !== "admin" && nextUrl.pathname.startsWith("/admin")) {
    console.log("Unauthorized: Non-admin user attempting to access admin page");
    return NextResponse.redirect(new URL("/access-denied", nextUrl.href));
  }

  // Allow access to /, /blog, and /blog/:path* for all users
  if (nextUrl.pathname.startsWith("/") || nextUrl.pathname.startsWith("/post")) {
    console.log("Allowing access to:", nextUrl.pathname);
    return response;
  }

  if (authUser && authUser.role === 'user') {
    console.log("USERRRRRRRRRRRRR", authUser.role);
  }


  // Redirect authenticated users to home if they try to access /auth
  
  console.log("Allowing access to:", nextUrl.pathname);
  return response;
}


export const config = {
  matcher: ["/", "/post/:path*", "/api/:path*", "/admin/:path*", "/auth"],
};
