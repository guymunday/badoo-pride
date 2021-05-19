import { useRouter } from "next/router";
import { request } from "../../lib/datocms";
import HomepageContent from "../../components/HomepageContent";

export default function Home({ english, spanish, french }) {
  const router = useRouter();
  const { locale } = router;

  console.log(english);

  if (locale === "es") {
    return <HomepageContent data={spanish} />;
  }

  if (locale === "fr") {
    return <HomepageContent data={french} />;
  }

  return <HomepageContent data={english} />;
}

const HOMEPAGE_QUERY_ENGLISH = `
query HomePage($isBlank: BooleanType = "", $limit: IntType, $skip: IntType) {
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
  allPages(locale: en, filter: {title: {isBlank: $isBlank}}, first: $limit, skip: $skip) {
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
query HomePage($isBlank: BooleanType = "", $limit: IntType, $skip: IntType) {
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
  allPages(locale: es, filter: {title: {isBlank: $isBlank}}, first: $limit, skip: $skip) {
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
query HomePage($isBlank: BooleanType = "", $limit: IntType, $skip: IntType) {
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
  allPages(locale: fr, filter: {title: {isBlank: $isBlank}}, first: $limit, skip: $skip) {
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

export async function getStaticProps({ params }) {
  const { page } = params;

  const limit = 2;
  const skip = (parseInt(page) - 1) * limit;

  const english = await request({
    query: HOMEPAGE_QUERY_ENGLISH,
    variables: { limit, skip },
  });
  const spanish = await request({
    query: HOMEPAGE_QUERY_SPANISH,
    variables: { limit, skip },
  });
  const french = await request({
    query: HOMEPAGE_QUERY_FRENCH,
    variables: { limit, skip },
  });
  return {
    props: { english, spanish, french },
  };
}

export async function getStaticPaths({ locales }) {
  const resultsEnglish = await request({
    query: HOMEPAGE_QUERY_ENGLISH,
  });

  const resultsFrench = await request({
    query: HOMEPAGE_QUERY_FRENCH,
  });

  const resultsSpanish = await request({
    query: HOMEPAGE_QUERY_SPANISH,
  });

  const englishPages = Math.ceil(resultsEnglish.allPages.length / 2);
  const frenchPages = Math.ceil(resultsFrench.allPages.length / 2);
  const spanishPages = Math.ceil(resultsSpanish.allPages.length / 2);

  const englishPaths = Array.from(
    { length: englishPages },
    () => resultsEnglish.allPages
  ).map((_, i) => ({
    params: { page: `${i + 1}` },
    locale: locales[0],
  }));

  const frenchPaths = Array.from(
    { length: frenchPages },
    () => resultsFrench.allPages
  ).map((_, i) => ({
    params: { page: `${i + 1}` },
    locale: locales[1],
  }));

  const spanishPaths = Array.from(
    { length: spanishPages },
    () => resultsSpanish.allPages
  ).map((_, i) => ({
    params: { page: `${i + 1}` },
    locale: locales[2],
  }));

  const paths = [...englishPaths, ...frenchPaths, ...spanishPaths];

  return {
    paths,
    fallback: false,
  };
}
