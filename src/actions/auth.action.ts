"use server"

import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"
import bcrypt, { compare } from 'bcrypt'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { signToken } from "@/libs/token"
import { LoginParams, RegisterParams } from "@/libs/types"

const registerSchema = z.object({
  name: z.string().min(1),
  password: z.string().min(6),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
});

export const registerUser = async ({ name, email, password }: RegisterParams) => {

  // const name = formData.get("name") ;
  // const email = formData.get("email") ;
  // const password = formData.get("password") as string | nu
  try {
    console.log(name, email, password)
    if (!name || !email || !password) {
      return new NextResponse("Missing Credentials!", { status: 400 })
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if (existingUser) return new NextResponse("User already exists!", { status: 401 })

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      }
    })
    // revalidatePath(path)

    if (user) {
      const response = await signToken({ user });
      console.log(response); // Make sure to handle the response accordingly
    }
    
  } catch (error) {
    return console.log(error)
  }

}

export const loginUser = async ({ email, password }: LoginParams) => {

  // const name = formData.get("name") ;
  // const email = formData.get("email") ;
  // const password = formData.get("password") as string | nu
  try {
    console.log(email, password)
    if ( !email || !password) {
      return new NextResponse("Missing Credentials!", { status: 400 })
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if (!user || !(await compare(password, user.password! ))) {
      return new NextResponse(JSON.stringify({ message: "Wrong Credentials!" }), { status: 401 })
    }

    // revalidatePath(path)

    if (user) {
      const response = await signToken({ user });
      console.log(response); // Make sure to handle the response accordingly
    }
    
  } catch (error) {
    return console.log(error)
  }

}