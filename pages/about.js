import { useRouter } from "next/router";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import { request } from "../lib/datocms";
import Slices from "../components/pages/Slices";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styled from "styled-components";

const AboutHeader = styled.div`
  text-align: center;
  padding: 120px 20px 0 20px;
  width: 100%;
  .title {
    font-size: 8.5rem;
    line-height: 0.8;
    @media screen and (max-width: 600px) {
      font-size: 5rem;
    }
  }
  h3 {
    font-size: 3rem;
    line-height: 0.8;
    margin-bottom: 10px;
    @media screen and (max-width: 600px) {
      font-size: 1.7rem;
    }
  }
`;

export default function AboutPage({ english, spanish, french }) {
  const router = useRouter();
  const { locale } = router;

  if (locale === "es") {
    return (
      <>
        <Head>{renderMetaTags(spanish?.aboutPage?.seo)}</Head>
        <Menu data={spanish?.menu} />
        <AboutHeader>
          <h3>{spanish?.homePage?.presents}</h3>
          <h1 className="letter-from title">
            {spanish?.homePage?.aLetterFrom}
          </h1>
        </AboutHeader>
        <Slices
          slices={spanish?.aboutPage?.contentBlocks}
          title={spanish?.aboutPage?.title}
          letterFrom={spanish?.homePage?.aLetterFrom}
        />
        <Footer data={spanish?.footer} />
      </>
    );
  }

  if (locale === "fr") {
    return (
      <>
        <Head>{renderMetaTags(french?.aboutPage?.seo)}</Head>
        <Menu data={french?.menu} />
        <AboutHeader>
          <h3>{french?.homePage?.presents}</h3>
          <h1 className="letter-from title">{french?.homePage?.aLetterFrom}</h1>
        </AboutHeader>
        <Slices
          slices={french?.aboutPage?.contentBlocks}
          title={french?.homePage?.title}
          letterFrom={french?.menu?.aLetterFrom}
        />
        <Footer data={french?.footer} />
      </>
    );
  }

  return (
    <>
      <Head>{renderMetaTags(english?.aboutPage?.seo)}</Head>
      <Menu data={english?.menu} />
      <AboutHeader>
        <h3>{english?.homePage?.presents}</h3>
        <h1 className="letter-from title">{english?.homePage?.aLetterFrom}</h1>
      </AboutHeader>
      <Slices
        slices={english?.aboutPage?.contentBlocks}
        title={english?.homePage?.title}
        letterFrom={english?.menu?.aLetterFrom}
      />
      <Footer data={english?.footer} />
    </>
  );
}

const ABOUT_QUERY = `
query AboutQuery($locale: SiteLocale) {
  homePage(locale: $locale) {
    aLetterFrom
    presents
  }
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
  aboutPage(locale: $locale) {
                seo: _seoMetaTags {
      tag
      content
      attributes
    }
    title
    contentBlocks {
      ... on VideoRecord {
        _modelApiKey
        video {
          url
          title
          providerUid
        }
      }
      ... on FullWidthGalleryRecord {
        _modelApiKey
        gallery {
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
      ... on GalleryRecord {
        _modelApiKey
        gallery {
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
      ... on CopyRecord {
        copy
        _modelApiKey
      }
    }
  }
}
`;

export async function getStaticProps() {
  const english = await request({
    query: ABOUT_QUERY,
    variables: { locale: "en" },
  });
  const spanish = await request({
    query: ABOUT_QUERY,
    variables: { locale: "es" },
  });
  const french = await request({
    query: ABOUT_QUERY,
    variables: { locale: "fr" },
  });

  return {
    props: { english, spanish, french },
  };
}
