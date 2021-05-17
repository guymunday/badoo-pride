import { Image } from "react-datocms";
import FeaturedCarousel from "./homepage/FeaturedCarousel";
import Slices from "./homepage/Slices";

export default function HomepageContent({ data }) {
  return (
    <>
      <Image data={data?.homePage?.heroImage?.responsiveImage} />
      <Slices slices={data?.homePage?.contentBlocks} />
    </>
  );
}
