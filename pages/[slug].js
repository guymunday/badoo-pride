import { useRouter } from "next/router";
import { request } from "../lib/datocms";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import Slices from "../components/pages/Slices";
import SeeMore from "../components/pages/SeeMore";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function ContentPage({ english, spanish, french }) {
  const router = useRouter();
  const { locale } = router;

  if (locale === "es") {
    return (
      <>
        <Head>{renderMetaTags(spanish?.allPages[0]?.seo)}</Head>
        <Menu data={spanish?.menu} />
        <Slices
          slices={spanish?.allPages[0]?.contentBlocks}
          letterFrom={spanish?.homePage?.aLetterFrom}
          title={spanish?.allPages[0]?.title}
        />
        <SeeMore
          data={spanish?.seeMore}
          letterFrom={spanish?.homePage?.aLetterFrom}
        />
        <Footer data={spanish?.footer} />
      </>
    );
  }

  if (locale === "fr") {
    return (
      <>
        <Head>{renderMetaTags(french?.allPages[0]?.seo)}</Head>
        <Menu data={french?.menu} />
        <Slices
          slices={french?.allPages[0]?.contentBlocks}
          letterFrom={french?.homePage?.aLetterFrom}
          title={french?.allPages[0]?.title}
        />
        <SeeMore
          data={french?.seeMore}
          letterFrom={french?.homePage?.aLetterFrom}
        />
        <Footer data={french?.footer} />
      </>
    );
  }

  return (
    <>
      <Head>{renderMetaTags(english?.allPages[0]?.seo)}</Head>
      <Menu data={english?.menu} />
      <Slices
        slices={english?.allPages[0]?.contentBlocks}
        letterFrom={english?.homePage?.aLetterFrom}
        title={english?.allPages[0]?.title}
      />
      <SeeMore
        data={english?.seeMore}
        letterFrom={english?.homePage?.aLetterFrom}
      />
      <Footer data={english?.footer} />
    </>
  );
}

const SLUG_QUERY = `
query PagesQuery {
  allPages {
    slug
  }
}
`;

const PAGE_QUERY = `
query PageQuery($slug: String!, $isBlank: BooleanType = "", $locale: SiteLocale) {
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
  allPages(locale: $locale, filter: { slug: {eq: $slug}}) {
    slug
    title
       seo: _seoMetaTags {
      attributes
      content
      tag
    }
    contentBlocks {
      ... on VerticalVideoRecord {
        _modelApiKey
        verticalVideoOne {
          url
          title
          providerUid
        }
        verticalVideoTwo {
          url
          title
          providerUid
        }
      }
      ... on VideoRecord {
        _modelApiKey
        video {
          url
          title
          providerUid
        }
      }
      ... on HeroSectionRecord {
        _modelApiKey
        heroImage {
          responsiveImage(imgixParams: {auto: compress, fit: crop}) {
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
      ... on FullWidthGalleryRecord {
        _modelApiKey
        gallery {
          responsiveImage(imgixParams: {auto: compress, fit: crop}) {
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
      ... on GalleryRecord {
        _modelApiKey
        gallery {
          responsiveImage(imgixParams: {auto: compress, fit: crop}) {
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
      ... on CopyRecord {
        copy
        _modelApiKey
      }
    }
  }
  homePage(locale: $locale) {
    aLetterFrom
  }
  seeMore: allPages(orderBy: order_ASC,locale: $locale, filter: {publishThisLoacle: {eq: "true"}, title: {isBlank: $isBlank}, slug: {neq: $slug}}, first: 3) {
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
  const { slug } = params;

  const english = await request({
    query: PAGE_QUERY,
    variables: { slug, locale: "en" },
  });
  const spanish = await request({
    query: PAGE_QUERY,
    variables: { slug, locale: "es" },
  });
  const french = await request({
    query: PAGE_QUERY,
    variables: { slug, locale: "fr" },
  });

  return {
    props: { english, spanish, french },
  };
}

export async function getStaticPaths({ locales }) {
  const results = await request({
    query: SLUG_QUERY,
  });

  const paths = locales.reduce(
    (acc, next) => [
      ...acc,
      ...results.allPages.map((slug) => ({
        params: { slug: slug.slug },
        locale: next,
      })),
    ],
    []
  );

  return {
    paths,
    fallback: false,
  };
}
