import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Image } from "react-datocms";

const Pagination = styled.div``;

export default function Thumbnails({ data }) {
  const router = useRouter();

  return (
    <>
      {data?.map((t, i) => {
        console.log(t);
        return (
          <>
            <Image data={t?.contentBlocks[0]?.heroImage?.responsiveImage} />
            <h1>{t?.title}</h1>
          </>
        );
      })}
      <Pagination>
        {parseInt(router.query.page) !== 1 && (
          <Link href={`/page/${parseInt(router.query.page) - 1}`}>
            Previous
          </Link>
        )}
        {data.length > 1 && (
          <Link href={`/page/${parseInt(router.query.page) + 1}`}>Next</Link>
        )}
      </Pagination>
    </>
  );
}
