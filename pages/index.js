import { useRouter } from "next/router";
import { request } from "../lib/datocms";
import HomepageContent from "../components/HomepageContent";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function Home({ english, spanish, french }) {
  const router = useRouter();
  const { locale } = router;

  console.log(english);

  if (locale === "es") {
    return (
      <>
        <Menu data={spanish?.menu} />
        <HomepageContent data={spanish} />
        <Footer data={spanish?.footer} />
      </>
    );
  }

  if (locale === "fr") {
    return (
      <>
        <Menu data={french?.menu} />
        <HomepageContent data={french} />
        <Footer data={french?.footer} />
      </>
    );
  }

  return (
    <>
      <Menu data={english?.menu} />
      <HomepageContent data={english} />
      <Footer data={english?.footer} />
    </>
  );
}

const HOMEPAGE_QUERY_ENGLISH = `
query HomePage($isBlank: BooleanType = "") {
  menu(locale: en) {
    aLetterFrom
    menuItems {
      title
      slug
    }
  }
  footer: sponsorMessageFooter(locale: en) {
    termsLink
    privacyLink
    cookiesLink
    sponsorMessage
  }
  homePage(locale: en) {
    presents
    aLetterFrom
    contentBlocks {
      ... on LettersFromThumbnailRecord {
        _modelApiKey
        thumbnails
      }
      ... on WordBlockRecord {
        copy
        _modelApiKey
        icon {
          alt
          url
        }
      }
      ... on FeaturedVideoCollectionRecord {
        _modelApiKey
        video {
          title
          videos {
            videoUrl {
              url
              providerUid
              title
            }
          }
        }
      }
    }
    heroVideo {
      url
    }
    heroImage {
      responsiveImage(imgixParams: {auto: format, fit: crop}) {
        src
        title
        alt
        base64
        bgColor
        width
        height
        aspectRatio
      }
    }
  }
  allPages(locale: en, filter: {title: {isBlank: $isBlank}}, first: 8) {
    id
    slug
    title
    contentBlocks {
      ... on HeroSectionRecord {
        heroImage {
          responsiveImage(imgixParams: {auto: format, fit: crop}) {
            src
            title
            alt
            base64
            bgColor
            width
            height
            aspectRatio
          }
        }
      }
    }
  }
}
`;

const HOMEPAGE_QUERY_SPANISH = `
query HomePage($isBlank: BooleanType = "") {
  menu(locale: es) {
    aLetterFrom
    menuItems {
      title
      slug
    }
  }
  footer: sponsorMessageFooter(locale: es) {
    termsLink
    privacyLink
    cookiesLink
    sponsorMessage
  }  
  homePage(locale: es) {
    presents
    aLetterFrom
    contentBlocks {
      ... on LettersFromThumbnailRecord {
        _modelApiKey
        thumbnails
      }
      ... on WordBlockRecord {
        copy
        _modelApiKey
        icon {
          alt
          url
        }
      }
      ... on FeaturedVideoCollectionRecord {
        _modelApiKey
        video {
          title
          videos {
            videoUrl {
              url
              title
              providerUid
            }
          }
        }
      }
    }
    heroVideo {
      url
    }
    heroImage {
      responsiveImage(imgixParams: {auto: format, fit: crop}) {
        src
        title
        alt
        base64
        bgColor
        width
        height
        aspectRatio
      }
    }
  }
  allPages(locale: es, filter: {title: {isBlank: $isBlank}}, first: 8) {
    id
    slug
    title
    contentBlocks {
      ... on HeroSectionRecord {
        heroImage {
          responsiveImage(imgixParams: {auto: format, fit: crop}) {
            src
            title
            alt
            base64
            bgColor
            width
            height
            aspectRatio
          }
        }
      }
    }
  }
}
`;

const HOMEPAGE_QUERY_FRENCH = `
query HomePage($isBlank: BooleanType = "") {
  menu(locale: fr) {
    aLetterFrom
    menuItems {
      title
      slug
    }
  }
  footer: sponsorMessageFooter(locale: fr) {
    termsLink
    privacyLink
    cookiesLink
    sponsorMessage
  }
  homePage(locale: fr) {
    presents
    aLetterFrom
    contentBlocks {
      ... on LettersFromThumbnailRecord {
        _modelApiKey
        thumbnails
      }
      ... on WordBlockRecord {
        copy
        _modelApiKey
        icon {
          alt
          url
        }
      }
      ... on FeaturedVideoCollectionRecord {
        _modelApiKey
        video {
          title
          videos {
            videoUrl {
              url
              title
              providerUid
            }
          }
        }
      }
    }
    heroVideo {
      url
    }
    heroImage {
      responsiveImage(imgixParams: {auto: format, fit: crop}) {
        src
        title
        alt
        base64
        bgColor
        width
        height
        aspectRatio
      }
    }
  }
  allPages(locale: fr, filter: {title: {isBlank: $isBlank}}, first: 8) {
    id
    slug
    title
    contentBlocks {
      ... on HeroSectionRecord {
        heroImage {
          responsiveImage(imgixParams: {auto: format, fit: crop}) {
            src
            title
            alt
            base64
            bgColor
            width
            height
            aspectRatio
          }
        }
      }
    }
  }
}
`;

export async function getStaticProps() {
  const english = await request({
    query: HOMEPAGE_QUERY_ENGLISH,
  });
  const spanish = await request({
    query: HOMEPAGE_QUERY_SPANISH,
  });
  const french = await request({
    query: HOMEPAGE_QUERY_FRENCH,
  });
  return {
    props: { english, spanish, french },
  };
}
