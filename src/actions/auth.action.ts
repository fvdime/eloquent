// "use server"

// import prisma from "@/libs/prisma"
// import { NextResponse } from "next/server"
// import bcrypt from 'bcrypt'
// import { z } from 'zod'
// import { signJWT } from "@/libs/auth"

// const EXP_TIME = 30 * 24 * 60 * 60 * 1000

// const createSchema = z.object({
//   name: z.string().min(1),
//   password: z.string().min(6),
//     email: z
//         .string()
//         .min(1, { message: 'This field has to be filled.' })
//         .email('This is not a valid email.'),
// });

// export const register = async (formData: FormData) => {

//   // const name = formData.get("name")
//   // const email = formData.get("email")
//   // const password = formData.get("password")

//   const isValidData = createSchema.parse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//   })

//   let data;

//   if (!isValidData.name || !isValidData.email || !isValidData.password) {
//     return new NextResponse("Missing Credentials!", { status: 400 })
//   }

//   const existingUser = await prisma.user.findFirst({
//     where: {
//       email: isValidData.email 
//     }
//   })

//   if (existingUser) return new NextResponse("User already exists!", { status: 401 })

//   const hashedPassword = await bcrypt.hash(isValidData.password, 12)

//   try {
//     data = await prisma.user.create({
//       data: {
//         email: isValidData.email,
//         name: isValidData.name,
//         password: hashedPassword,
//       }
//     })

//     if (data) {
//       const token = await signJWT(
//         { sub: data.id! },
//         { exp: "4h" }
//       )
  
//       const tokenMaxAge = EXP_TIME * 60
  
//       const cookieOptions = {
//         name: "token",
//         value: token,
//         httpOnly: true,
//         path: '/',
//         secure: process.env.NODE_ENV !== "development",
//         maxAge: tokenMaxAge
//       }
  
//       const response = new NextResponse(JSON.stringify({status: "success", token}), { status: 200, headers: { "Content-Type": "application/json"}})
  
//       await Promise.all([
//         response.cookies.set(cookieOptions),
//         response.cookies.set({
//           name: "logged-in",
//           value: "true",
//           maxAge: tokenMaxAge
//         })
//       ])
      
//       return response
//     }

//     // return new NextResponse(JSON.stringify({ message: "User not created" }), { status: 401 })

//   } catch (error) {
//     return console.log(error)
//   }

//   return {
//     data,
//   };
// }