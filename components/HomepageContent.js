import HeroSection from "./homepage/HeroSection";
import Slices from "./homepage/Slices";

export default function HomepageContent({ data }) {
  return (
    <>
      <HeroSection
        video={data?.homePage?.heroVideo?.url}
        image={data?.homePage?.heroImage?.responsiveImage}
        subtitle={data?.homePage?.presents}
        title={data?.homePage?.aLetterFrom}
      />
      <Slices
        slices={data?.homePage?.contentBlocks}
        thumbnails={data?.allPages}
        aLetterFrom={data?.homePage?.aLetterFrom}
      />
    </>
  );
}
