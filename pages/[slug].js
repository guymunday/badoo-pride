import { useRouter } from "next/router";
import Link from "next/link";
import { request } from "../lib/datocms";

export default function ContentPage({ data }) {
  console.log(data);

  return <>{data?.allPages[0]?.title}</>;
}

const SLUG_QUERY = `
query PagesQuery {
  allPages {
    slug
  }
}
`;

const PAGE_QUERY = `
query PageQuery($slug: String!) {
  allPages(filter: {slug: {eq: $slug}}) {
    slug
    title
  }
}
`;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = await request({
    query: PAGE_QUERY,
    variables: { slug },
  });
  return {
    props: { data },
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
