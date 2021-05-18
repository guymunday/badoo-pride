import HeroSection from "./HeroSection";
import Slices from "./homepage/Slices";

export default function HomepageContent({ data }) {
  return (
    <>
      <HeroSection data={data} />
      <Slices slices={data?.homePage?.contentBlocks} />
    </>
  );
}
