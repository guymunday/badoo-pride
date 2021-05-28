import Head from "next/head";
import favicon from "../assets/favicon.ico";

export default function Analytics() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href={favicon} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2KEKKY153W"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2KEKKY153W');
            `,
          }}
        />
      </Head>
    </>
  );
}
