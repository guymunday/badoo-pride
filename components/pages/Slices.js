import Copy from "./Copy";
import MasonryGallery from "./MasonryGallery";
import HeroSection from "./HeroSection";
import Video from "./Video";
import FullwidthGallery from "./FullwidthGallery";

export default function Slices({ slices, letterFrom, title }) {
  const slice = slices.map((s, i) => {
    console.log(s);

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
        return <Video key={i} video={s?.video} />;
      case "copy":
        return <Copy key={i} copy={s?.copy} />;
      case "gallery":
        return <MasonryGallery key={i} images={s?.gallery} />;
      case "full_width_gallery":
        return <FullwidthGallery key={i} images={s?.gallery} />;
      default:
        return null;
    }
  });

  return <>{slice}</>;
}
