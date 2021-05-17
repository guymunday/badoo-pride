import FeaturedCarousel from "./FeaturedCarousel";

export default function Slices({ slices }) {
  console.log(slices);

  const slice = slices.map((s, i) => {
    switch (s._modelApiKey) {
      case "word_block":
        return <p>Words</p>;
      case "featured_video_collection":
        return <FeaturedCarousel key={i} data={s} />;
      default:
        return null;
    }
  });

  return <>{slice}</>;
}
