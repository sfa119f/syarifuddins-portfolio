import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import jsonLd from "@/doc/jsonLd.json";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Syarifuddin's Portfolio with NextJS"
        />
        <meta
          name="keyword"
          content="syarifuddin, syarifuddin fakhri al husaini, portfolio, portofolio"
        />
        <link
          rel="author"
          href="https://syarifuddins-portfolio.vercel.app/"
        ></link>
        <meta
          name="google-site-verification"
          content="RilVesQl9Fn6efrgySFIVckTctFDfW7rUsu02hq11gw"
        />
        <link rel="icon" href="/logo.webp" />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
