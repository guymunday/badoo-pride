import WordBlock from "./WordBlock";
import Carousel from "./Carousel";
import Thumbnails from "./Thumbnails";
import FadeIn from "../FadeIn";

export default function Slices({ slices, thumbnails, aLetterFrom }) {
  const slice = slices.map((s, i) => {
    switch (s._modelApiKey) {
      case "word_block":
        return (
          <FadeIn key={i}>
            <WordBlock data={s} />
          </FadeIn>
        );
      case "letters_from_thumbnail":
        return (
          <FadeIn key={i}>
            <Thumbnails data={thumbnails} aLetterFrom={aLetterFrom} />
          </FadeIn>
        );
      case "featured_video_collection":
        return (
          <FadeIn key={i}>
            <Carousel data={s} />
          </FadeIn>
        );
      default:
        return null;
    }
  });

  return <>{slice}</>;
}
