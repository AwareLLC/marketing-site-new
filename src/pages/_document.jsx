import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"

        />
        <Script id="firstPromoter" strategy="lazyOnload">
          {`
            (function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
            fpr("init", {cid:"5mps9ho5"}); 
            fpr("click");
          `}
        </Script>
        <script src="https://cdn.firstpromoter.com/fpr.js" async></script>

        <Script strategy="lazyOnload">
				</Script>

        <Script id="profitwell-js" strategy="lazyOnload" data-pw-auth="600492d9a1f8f150cc69b5b5329e9cc2">
          {`
            (function(i,s,o,g,r,a,m){i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)};
            a=s.createElement(g);m=s.getElementsByTagName(g)[0];a.async=1;a.src=r+'?auth='+
            s.getElementById(o+'-js').getAttribute('data-pw-auth');m.parentNode.insertBefore(a,m);
            })(window,document,'profitwell','script','https://public.profitwell.com/js/profitwell.js');

            profitwell('start', {});
          `}
        </Script>

      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6DXFBF1RMT');
        `}
      </Script>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-6DXFBF1RMT" strategy="afterInteractive"></Script>
      </body>
    </Html>
  )
}
