import { getSinglePost } from '@/actions/post.actions'
import React from 'react'

export default async function SinglePostPage({ params }: any) {

  const id = params.id

  console.log("ID:::::::"+id)

  const singlePost = await getSinglePost(id)

  // console.log(singlePost)

  return (
    <div>
      <h1>{singlePost?.title}</h1>
      <h1>{singlePost?.description}</h1>
      <h1>{singlePost?.content}</h1>
      <h1>{singlePost?.createdAt.toDateString()}</h1>
    </div>
  )
}
