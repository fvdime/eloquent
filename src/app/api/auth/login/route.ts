import { signJWT } from "@/libs/auth";
import { compare } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma"
import { z } from "zod";

const EXP_TIME = 30 * 24 * 60 * 60 * 1000

const loginSchema = z.object({
  password: z.string({
    required_error: "Password is required",
  })
  .min(1, "Password is required")
  .min(6, "Password must be at least 8 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const isValidData = loginSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    const user = await prisma.user.findUnique({
      where: { email: isValidData.email }
    })

    if (!user || !(await compare(isValidData.password, user.password! ))) {
      return new NextResponse(JSON.stringify({ message: "Wrong Credentials!" }), { status: 401 })
    }

    const token = await signJWT(
      { sub: user.id!, role: user.role! },
      { exp: "4h" }
    )

    const tokenMaxAge = EXP_TIME * 60

    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge
    }

    const response = new NextResponse(JSON.stringify({status: "success", token}), { status: 200, headers: { "Content-Type": "application/json"}})

    await Promise.all([
      response.cookies.set(cookieOptions),
      response.cookies.set({
        name: "logged-in",
        value: "true",
        maxAge: tokenMaxAge
      })
    ])
    
    return response
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}