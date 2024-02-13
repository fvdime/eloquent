import { getFeaturedPost } from "@/actions/post.actions";
import CursorFollower from "@/components/cursor-follower";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import HorizontalGallery from "@/components/horizontal-gallery";

export default async function Home() {
  // const cookieStore = cookies();
  // const token = cookieStore.get("token");

  // const user = await apiGetAuthUser(token?.value);

  const featuredPosts = await getFeaturedPost()

  // console.log(featuredPosts)

  return (
    <>
      <HeroBanner />
      <CursorFollower featuredPosts={featuredPosts}/>
      <div className="h-screen w-full bg-pink-600"></div>
      <HorizontalGallery/>
      <div className="h-screen w-full bg-pink-600"></div>
      <Footer />
    </>
  );
}
