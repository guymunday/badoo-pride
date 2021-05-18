import FeaturedCarousel from "./FeaturedCarousel";
import WordBlock from "./WordBlock";
import Carousel from "./Carousel"

export default function Slices({ slices }) {
  console.log(slices);

  const slice = slices.map((s, i) => {
    switch (s._modelApiKey) {
      case "word_block":
        return <WordBlock key={i} data={s} />;
      case "letters_from_thumbnail":
        return <>Thumbnails</>;
      case "featured_video_collection":
        return <Carousel key={i} data={s} />;
      default:
        return null;
    }
  });

  return <>{slice}</>;
}
