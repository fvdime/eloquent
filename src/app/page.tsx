import CursorFollower from "@/components/cursor-follower";
import Footer from "@/components/footer";
import HeroBanner from "@/components/hero-banner";
import HorizontalGallery from "@/components/horizontal-gallery";

export default async function Home() {
  // const cookieStore = cookies();
  // const token = cookieStore.get("token");

  // const user = await apiGetAuthUser(token?.value);

  return (
    <>
      <HeroBanner />
      <CursorFollower />
      <div className="h-screen w-full bg-pink-600"></div>
      <HorizontalGallery/>
      <div className="h-screen w-full bg-pink-600"></div>
      <Footer />
    </>
  );
}
