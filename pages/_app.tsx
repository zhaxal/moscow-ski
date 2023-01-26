import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import theme from '../styles/theme';
import Head from 'next/head';
import { Box } from '@mui/material';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content="«Московский спорт представляет большой лыжный праздник 11 и 12 февраля в Битце»" />
        <meta property="og:title" content="«Лыжня России 2023 и Московский лыжный марафон»" />
        <meta property="og:description" content="Московский спорт представляет большой лыжный праздник 11 и 12 февраля в Битце»" />
        <meta property="og:url" content="https://ski.moscow.sport/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/metaIcon.jpg" />

        <title>Лыжня России 2023 и Московский лыжный марафон</title>
      </Head>
      <Script
        id="id"
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
      <noscript><div><img src="https://mc.yandex.ru/watch/91937297" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>

      <Box
        sx={{ display: "none" }}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <span itemProp="name">Лыжня России 2023</span>
        <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          Адрес:
          <span itemProp="streetAddress">Москва, ЮЗАО, 36й км МКАД, зона отдыха “Альфа-Битца”</span>
        </div>
        <span itemProp="email">ski@moscow.sport</span>
        <div itemScope itemType="http://schema.org/ImageObject">
          <img src="/images/metaIcon.jpeg" itemProp="contentUrl" alt={"metaIcon"} />
        </div>
      </Box>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
