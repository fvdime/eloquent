import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./libs/auth";

interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string;
  };
}

let redirectToLogin = false;

export async function middleware(req: NextRequest) {

  const { url, nextUrl, cookies } = req;

  let { value: token } = cookies.get('token') ?? {
    value: null,
  };

  if (!token) {
    token = req?.headers?.get("Authorization")?.substring(7) || null;
  }

  if (req.nextUrl.pathname.startsWith("/auth") && (!token || redirectToLogin))
    return;

  if (
    !token &&
    (req.nextUrl.pathname.startsWith("/api/users") ||
      req.nextUrl.pathname.startsWith("/api/auth/logout"))
  ) {
    return new NextResponse(JSON.stringify({ message: "You are not logged in. Please provide a token to gain access." }), { status: 401 })
  }

  const response = NextResponse.next();

  try {
    if (token) {
      const { sub } = await verifyJWT<{ sub: string }>(token);
      response.headers.set("X-USER-ID", sub);
      (req as AuthenticatedRequest).user = { id: sub };
    }
  } catch (error) {
    redirectToLogin = true;
    if (req.nextUrl.pathname.startsWith("/api")) {
      return new NextResponse(JSON.stringify({ message: "Token is invalid or user doesn't exists" }), { status: 401 })
    }

    return NextResponse.redirect(
      new URL(`/login?${new URLSearchParams({ error: "bad auth" })}`, req.url)
    );
  }

  const authUser = (req as AuthenticatedRequest).user;

  if (!authUser) {
    return NextResponse.redirect(
      new URL(
        `/login?${new URLSearchParams({
          error: "bad auth",
          forceLogin: "true",
        })}`,
        req.url
      )
    );
  }

  if (req.url.includes("/login") && authUser) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/api/users/:path*", "/api/auth/logout", "/api/post/delete/:path*", "/api/post/update/:path*", "/api/post/create"],
};