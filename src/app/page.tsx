import { getFeaturedPost } from "@/actions/post.actions";
import CursorFollower from "@/components/cursor-follower";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import HorizontalGallery from "@/components/horizontal-gallery";

export default async function Home() {
  const featuredPosts = await getFeaturedPost();

  return (
    <>
      <HeroBanner />
      <div className="h-[20vh] w-full" />
      <HorizontalGallery />
      <div className="h-[30vh] w-full" />
      <CursorFollower featuredPosts={featuredPosts} />
      <Footer />
    </>
  );
}
