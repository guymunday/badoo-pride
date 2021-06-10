import Copy from "./Copy";
import MasonryGallery from "./MasonryGallery";
import HeroSection from "./HeroSection";
import Video from "./Video";
import FullwidthGallery from "./FullwidthGallery";
import FadeIn from "../FadeIn";

export default function Slices({ slices, letterFrom, title }) {
  const slice = slices.map((s, i) => {
    switch (s._modelApiKey) {
      case "hero_section":
        return (
          <HeroSection
            key={i}
            subtitle={letterFrom}
            title={title}
            image={s?.heroImage?.responsiveImage}
          />
        );
      case "video":
        return (
          <FadeIn key={i}>
            <Video video={s?.video} />
          </FadeIn>
        );
      case "copy":
        return (
          <FadeIn key={i}>
            <Copy copy={s?.copy} />
          </FadeIn>
        );
      case "gallery":
        return (
          <FadeIn key={i}>
            <MasonryGallery images={s?.gallery} />
          </FadeIn>
        );
      case "full_width_gallery":
        return (
          <FadeIn key={i}>
            <FullwidthGallery images={s?.gallery} />
          </FadeIn>
        );
      default:
        return null;
    }
  });

  return <>{slice}</>;
}
