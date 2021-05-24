import { useRouter } from "next/router";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import { request } from "../../lib/datocms";
import HomepageContent from "../../components/HomepageContent";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

export default function Home({ english, spanish, french }) {
  const router = useRouter();
  const { locale } = router;

  if (locale === "es") {
    return (
      <>
        <Head>{renderMetaTags(spanish?.homePage?.seo)}</Head>
        <Menu data={spanish?.menu} />
        <HomepageContent data={spanish} />
        <Footer data={spanish?.footer} />
      </>
    );
  }

  if (locale === "fr") {
    return (
      <>
        <Head>{renderMetaTags(french?.homePage?.seo)}</Head>
        <Menu data={french?.menu} />
        <HomepageContent data={french} />
        <Footer data={french?.footer} />
      </>
    );
  }

  return (
    <>
      <Head>{renderMetaTags(english?.homePage?.seo)}</Head>
      <Menu data={english?.menu} />
      <HomepageContent data={english} />
      <Footer data={english?.footer} />
    </>
  );
}

const HOMEPAGE_QUERY_ENGLISH = `
query HomePage($isBlank: BooleanType = "", $limit: IntType, $skip: IntType) {
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
            seo: _seoMetaTags {
      tag
      content
      attributes
    }
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
  allPages(orderBy: order_ASC,locale: en, filter: {title: {isBlank: $isBlank}}, first: $limit, skip: $skip) {
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
            seo: _seoMetaTags {
      tag
      content
      attributes
    }
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
  allPages(orderBy: order_ASC,locale: es, filter: {title: {isBlank: $isBlank}}, first: $limit, skip: $skip) {
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
            seo: _seoMetaTags {
      tag
      content
      attributes
    }
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
  allPages(orderBy: order_ASC,locale: fr, filter: {title: {isBlank: $isBlank}}, first: $limit, skip: $skip) {
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

  const limit = 8;
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
