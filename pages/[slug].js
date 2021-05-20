import { useRouter } from "next/router";
import { request } from "../lib/datocms";
import Slices from "../components/pages/Slices";
import SeeMore from "../components/pages/SeeMore";

export default function ContentPage({ english, spanish, french }) {
  const router = useRouter();
  const { locale } = router;

  if (locale === "es") {
    return (
      <>
        <Slices
          slices={spanish?.allPages[0]?.contentBlocks}
          letterFrom={spanish?.homePage?.aLetterFrom}
          title={spanish?.allPages[0]?.title}
        />
        <SeeMore
          data={spanish?.seeMore}
          letterFrom={spanish?.homePage?.aLetterFrom}
        />
      </>
    );
  }

  if (locale === "fr") {
    return (
      <>
        <Slices
          slices={french?.allPages[0]?.contentBlocks}
          letterFrom={french?.homePage?.aLetterFrom}
          title={french?.allPages[0]?.title}
        />
        <SeeMore
          data={french?.seeMore}
          letterFrom={spanish?.homePage?.aLetterFrom}
        />
      </>
    );
  }

  return (
    <>
      <Slices
        slices={english?.allPages[0]?.contentBlocks}
        letterFrom={english?.homePage?.aLetterFrom}
        title={english?.allPages[0]?.title}
      />
      <SeeMore
        data={english?.seeMore}
        letterFrom={spanish?.homePage?.aLetterFrom}
      />
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

const PAGE_QUERY_ENGLISH = `
query PageQuery($slug: String!, $isBlank: BooleanType = "") {
  allPages(locale: en, filter: {slug: {eq: $slug}}) {
    slug
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
      ... on HeroSectionRecord {
        _modelApiKey
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
  homePage(locale: en) {
    aLetterFrom
  }
  seeMore: allPages(locale: en, filter: {title: {isBlank: $isBlank}, slug: {neq: $slug}}, first: 3) {
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

const PAGE_QUERY_SPANISH = `
query PageQuery($slug: String!, $isBlank: BooleanType = "") {
  allPages(locale: es, filter: {slug: {eq: $slug}}) {
    slug
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
      ... on HeroSectionRecord {
        _modelApiKey
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
  homePage(locale: es) {
    aLetterFrom
  }
  seeMore: allPages(locale: es, filter: {title: {isBlank: $isBlank}, slug: {neq: $slug}}, first: 3) {
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

const PAGE_QUERY_FRENCH = `
query PageQuery($slug: String!, $isBlank: BooleanType = "") {
  allPages(locale: fr, filter: {slug: {eq: $slug}}) {
    slug
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
      ... on HeroSectionRecord {
        _modelApiKey
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
  homePage(locale: fr) {
    aLetterFrom
  }
  seeMore: allPages(locale: fr, filter: {title: {isBlank: $isBlank}, slug: {neq: $slug}}, first: 3) {
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
    query: PAGE_QUERY_ENGLISH,
    variables: { slug },
  });
  const spanish = await request({
    query: PAGE_QUERY_SPANISH,
    variables: { slug },
  });
  const french = await request({
    query: PAGE_QUERY_FRENCH,
    variables: { slug },
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
