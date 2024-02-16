import { NextResponse } from "next/server";
import { signJWT } from "./auth";
import { cookies } from "next/headers";

const EXP_TIME = 30 * 24 * 60 * 60 * 1000

type newUserParams = {
  newUser: {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  }
}
export const signToken = async ({ user }: any) => {
  try {
    const token = await signJWT(
      { sub: user.id!, role: user.role! },
      { exp: "8h" }
    );

    console.log("Token signed successfully:", token);

    console.log("NEW USER::::::", JSON.stringify(user));

    console.log("NEW USER ID:", user.id);
    console.log("NEW USER ROLE:", user.role);

    const tokenMaxAge = EXP_TIME * 60;

    const cookieStore = cookies();

    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge
    };

    await Promise.all([
      cookieStore.set(cookieOptions),
      cookieStore.set({
        name: "logged-in",
        value: "true",
        maxAge: tokenMaxAge
      })
    ]);

    // return response; // Return the response object
  } catch (error) {
    console.error("Error signing JWT token:", error);
  }
};
