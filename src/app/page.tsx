import { getFeaturedPost } from "@/actions/post.actions";
import CursorFollower from "@/components/cursor-follower";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import HorizontalGallery from "@/components/horizontal-gallery";
import Slide from "@/components/slide";

export default async function Home() {
  // const cookieStore = cookies();
  // const token = cookieStore.get("token");

  // const user = await apiGetAuthUser(token?.value);

  const featuredPosts = await getFeaturedPost()

  // console.log(featuredPosts)

  return (
    <>
      <HeroBanner />
      <div className="h-[20vh] w-full"/>
      <HorizontalGallery/>
      <div className="h-[30vh] w-full"/>
      <CursorFollower featuredPosts={featuredPosts}/>
      <Footer />
    </>
  );
}
