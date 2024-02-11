import prisma from "@/libs/prisma"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { z } from 'zod'
import { signJWT } from "@/libs/auth"

const EXP_TIME = 30 * 24 * 60 * 60 * 1000

const createSchema = z.object({
  name: z.string().min(1),
  password: z.string().min(6),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const isValidData = createSchema.parse(body)

    const existUser = await prisma.user.findFirst({
      where: { email: isValidData.email },
    });

    if (existUser) {
      if (existUser?.email === isValidData.email) {
        return new NextResponse(JSON.stringify({ message: "Email already exists!" }), { status: 409 })
      }
    }

    const hashedPassword = await bcrypt.hash(isValidData.password, 10);

    const user = await prisma.user.create({
      data: {
        email: isValidData.email,
        name: isValidData.name,
        password: hashedPassword,
      }
    });

    if (user) {
      const token = await signJWT(
        { sub: user.id! },
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
    }

    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 402 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}