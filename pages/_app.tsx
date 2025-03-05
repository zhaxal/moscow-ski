import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import Script from "next/script";


export default function App({ Component, pageProps }: AppProps) {
  const metaDescription =
    "Московский спорт представляет Неделю Лыжни России в Москве с 26 февраля по 4 марта 2025 г.";
  const metaTitle = "Неделя Лыжни России в Москве";
  const metaUrl = "https://ski.moscow.sport/";
  const metaImage = "/images/metaIcon.jpg";
  const yandexVerification = "5257f1e845f3792f";

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />
        <meta name="yandex-verification" content={yandexVerification} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="android-chrome"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <meta name="yandex-verification" content="5257f1e845f3792f" />
        <title>{metaTitle}</title>
      </Head>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(91937297, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true
          });
            `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/91937297"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      <div
        className="hidden"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <span itemProp="name">Неделя Лыжни России</span>
        <div
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          Адрес:
          <span itemProp="streetAddress">
            Москва, ЮЗАО, 36й км МКАД, зона отдыха “Альфа-Битца”
          </span>
        </div>
        <span itemProp="email">ski@moscow.sport</span>
        <div itemScope itemType="http://schema.org/ImageObject">
          <img
            src="/images/metaIcon.jpeg"
            itemProp="contentUrl"
            alt="metaIcon"
          />
        </div>
      </div>

      <Component {...pageProps} />
    </>
  );
}
