import WordBlock from "./WordBlock";
import Carousel from "./Carousel";
import Thumbnails from "./Thumbnails";

export default function Slices({ slices, thumbnails, aLetterFrom }) {
  const slice = slices.map((s, i) => {
    switch (s._modelApiKey) {
      case "word_block":
        return <WordBlock key={i} data={s} />;
      case "letters_from_thumbnail":
        return (
          <Thumbnails key={i} data={thumbnails} aLetterFrom={aLetterFrom} />
        );
      case "featured_video_collection":
        return <Carousel key={i} data={s} />;
      default:
        return null;
    }
  });

  return <>{slice}</>;
}
