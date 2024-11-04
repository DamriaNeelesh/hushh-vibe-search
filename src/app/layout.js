import localFont from "next/font/local";
import "./globals.css";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Vibe Search - match your perfect outfit with us",
//   description:
//     "Find perfect items to express your individuality in just one click with our vibe search",
//   keywords:
//     "Vibe Search, The vibe search app lets find and store all your favorite products that you come across by just taking a picture or by typing, Fashion, Vibe Match, Vibe search your companion for fashion and style, Find your style with your own stylist, Find products based on image and text, Save all your liked products, Get insights on your Fit and Style, Share your best Fit with Family and Friends, Find that perfect Fit and perfect look with just a click of a button, Integrate You Vibe with Vibe Search, vibe search also enables users to share your style preferences in their Hushh Wallet, easy to share and access important information, such as Your Size, FIt, Brands , Budget and Purchase history, Fit Brands and Sizes, Your Budget and purchase history track, Vibe search is more than just an app its your personal stylist on tap of a button, Share and Benefit, Search Any Style, Image based search, Save all your searches, Share curated list of products according to your vibe and fit along with your friends and family, Search any style throughout the internet, Your Personal Fashion Stylist at your Fingertips, Vibe search utilizes advanced algorithms and AI technology to analyze the captured data Find the best fit, Users receive personalized recommendations, discover new products and brands aligned with their interests, and stay up-to-date with the latest trends with Gen AI",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N3KQ5QKZ');
            `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JG6C3FQ2N8	"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JG6C3FQ2N8');
            `,
          }}
        />

        <meta
          name="google-site-verification"
          content="cvDzqg4M4DKJ9-KIoqCURxixD0sDERxPq67fY0n55Ng"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="verification" content="ec88987e0a554366fabd35acbae19efd" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16746454429"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16746454429');
            `,
          }}
        />
        <GoogleTagManager gtmId="G-JG6C3FQ2N8	" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <meta name="fo-verify" content="99078900-a479-470d-b88b-0b406b195229" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (m, a, z, e) {
  var s, t;
  try {
    t = m.sessionStorage.getItem('maze-us');
  } catch (err) {}

  if (!t) {
    t = new Date().getTime();
    try {
      m.sessionStorage.setItem('maze-us', t);
    } catch (err) {}
  }

  s = a.createElement('script');
  s.src = z + '?apiKey=' + e;
  s.async = true;
  a.getElementsByTagName('head')[0].appendChild(s);
  m.mazeUniversalSnippetApiKey = e;
})(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'f977b26b-7e1e-48b4-98f1-a3891a4a6943');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3KQ5QKZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ChakraBaseProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
