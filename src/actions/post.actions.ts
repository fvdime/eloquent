"use server"

import prisma from "@/libs/prisma"

export const createPost = async (formData: FormData) => {

  const title = formData.get("title")
  const description = formData.get("description")
  const image = formData.get("image")
  const content = formData.get("content")

  console.log(title, description, image, content)

  let data;


  try {
    // data = await prisma.post.create({
    //   data: {
        
    //   }
  } catch (error) {
    return console.log(error)
  }
}

export const deletePost = async (id: any) => {
  try {
    await prisma.post.delete({
      where: { id }
    })

    console.log("deleted from db")
  } catch (error) {
    throw new Error("Failed to fetch delete post!")
  }
}

export const updatePost = async ({ formData, id }: { formData: FormData, id: any }) => {

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const image = formData.get("image") as string
  const content = formData.get("content") as string


  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
        description: description,
        image: image
      },
    });

    console.log(updatedPost)
    return updatedPost
  } catch (error) {
    throw new Error("Failed to fetch delete post!")
  }
}

export const getSinglePost = async (id: any) => {
  try {
    const post = await prisma.post.findFirst({ 
      where: { id }
    })
    return post
  } catch (error) {
    throw new Error("Failed to fetch single post!")
  }
}

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany()
    return posts
  } catch (error) {
    throw new Error("Failed to fetch posts!")
  }
}

export const getFeaturedPost = async () => {
  try {
    const featuredPosts = await prisma.post.findMany({
      where: {
        isFeatured: true
      }
    })
    return featuredPosts
  } catch (error) {
    throw new Error("Failed to fetch featured posts!")
  }
}