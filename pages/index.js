import { useRouter } from "next/router";
import Link from "next/link";
import { request } from "../lib/datocms";
import HomepageContent from "../components/HomepageContent";

export default function Home({ english, spanish, french }) {
  const router = useRouter();
  const { locale } = router;

  if (locale === "es") {
    return <HomepageContent data={spanish} />;
  }

  if (locale === "fr") {
    return <HomepageContent data={french} />;
  }

  return <HomepageContent data={english} />;
}

const HOMEPAGE_QUERY_ENGLISH = `
query HomePage($isBlank: BooleanType = "") {
  homePage(locale: en) {
      contentBlocks {
      ... on WordBlockRecord {
        copy
        _modelApiKey
      }
      ... on FeaturedVideoCollectionRecord {
        _modelApiKey
        video {
          videos {
            videoUrl {
              url
              title
            }
          }
        }
      }
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
    allPages(locale: en, filter: {title: {isBlank: $isBlank}}) {
    id
    slug
    title
  }
}`;

const HOMEPAGE_QUERY_SPANISH = `
  query HomePage($isBlank: BooleanType = "") {
    homePage(locale: es) {
          contentBlocks {
      ... on WordBlockRecord {
        copy
        _modelApiKey
      }
      ... on FeaturedVideoCollectionRecord {
        _modelApiKey
        video {
          videos {
            videoUrl {
              url
              title
            }
          }
        }
      }
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
    allPages(locale: es, filter: {title: {isBlank: $isBlank}}) {
      id
      slug
      title
    }
}`;

const HOMEPAGE_QUERY_FRENCH = `
  query HomePage($isBlank: BooleanType = "") {
    homePage(locale: fr) {
          contentBlocks {
      ... on WordBlockRecord {
        copy
        _modelApiKey
      }
      ... on FeaturedVideoCollectionRecord {
        _modelApiKey
        video {
          videos {
            videoUrl {
              url
              title
            }
          }
        }
      }
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
    allPages(locale: fr, filter: {title: {isBlank: $isBlank}}) {
      id
      slug
      title
    }
}`;

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
