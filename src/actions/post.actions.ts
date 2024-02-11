"use server"
import prisma from "@/libs/prisma"

export const createPost = async (formData: FormData) => {

  const title = formData.get("title")
  const description = formData.get("description")
  const image = formData.get("image")
  const source = formData.get("source")
  const demo = formData.get("demo")
  const content = formData.get("content")

  console.log(title, description, image, source, demo, content)

  let data;


  try {
    // data = await prisma.post.create({
    //   data: {
        
    //   }
  } catch (error) {
    return console.log(error)
  }
}