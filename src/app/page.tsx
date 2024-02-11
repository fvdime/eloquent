import CursorFollower from "@/components/cursor-follower";
import Footer from "@/components/footer";
import CreatePostForm from "@/components/forms/create-post-form";
import HeroBanner from "@/components/hero-banner";
import HorizontalGallery from "@/components/horizontal-gallery";
import { apiGetAuthUser } from "@/libs/api-requests";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const user = await apiGetAuthUser(token?.value);

  return (
    <>
      <div className="mt-8">
        <p className="mb-3">Id: {user.id}</p>
        <p className="mb-3">Name: {user.name}</p>
        <p className="mb-3">Email: {user.email}</p>
        <p className="mb-3">Role: {user.role}</p>
      </div>
      <CreatePostForm/>
      <HeroBanner />
      <CursorFollower />
      <div className="h-screen w-full bg-pink-600"></div>
      {/* <HorizontalGallery/> */}
      <div className="h-screen w-full bg-pink-600"></div>
      <Footer />
    </>
  );
}
