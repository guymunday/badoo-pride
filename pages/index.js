import { useRouter } from "next/router";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import { request } from "../lib/datocms";
import HomepageContent from "../components/HomepageContent";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

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

const HOMEPAGE_QUERY = `
query HomePage($isBlank: BooleanType = "", $locale: SiteLocale) {
  menu(locale: $locale) {
    aLetterFrom
    menuItems {
      title
      slug
    }
  }
  footer: sponsorMessageFooter(locale: $locale) {
    termsLink
    privacyLink
    cookiesLink
    sponsorMessage
  }
  homePage(locale: $locale) {
        seo: _seoMetaTags {
      tag
      content
      attributes
    }

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
      url
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
  allPages(orderBy: order_ASC, locale: $locale, filter: {publishThisLoacle: {eq: "true"}, title: {isBlank: $isBlank}}, first: 8) {
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
    query: HOMEPAGE_QUERY,
    variables: { locale: "en" },
  });
  const spanish = await request({
    query: HOMEPAGE_QUERY,
    variables: { locale: "es" },
  });
  const french = await request({
    query: HOMEPAGE_QUERY,
    variables: { locale: "fr" },
  });
  return {
    props: { english, spanish, french },
  };
}
