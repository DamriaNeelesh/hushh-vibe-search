import localFont from "next/font/local";
import "./globals.css";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import ClientOnly from "./components/ClientOnly";
import HushhButtonWrapper from "./components/HushhButtonWrapper";
import { Figtree } from 'next/font/google';
import Footer from "./components/utilities/Footer/Footer";

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

// Configure the Figtree font
const figtree = Figtree({
  subsets: ['latin'],
  weights: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-figtree', // Optional: if you want to use it as a CSS variable
});

// Default metadata (can be overridden by pages)
export const metadata = {
  title: 'Vibe Search',
  description: 'AI-powered semantic search for shopping.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${figtree.className}`}>
      <head>
        <Script
          id="gtm3"
          strategy="afterInteractive"
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
        <Script
          id="gtm1"
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-JG6C3FQ2N8	"
        />
        <script
          defer
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="verification" content="ec88987e0a554366fabd35acbae19efd" />
        <Script
          id="gtm2"
          defer
          src="https://www.googletagmanager.com/gtag/js?id=AW-16746454429"
        />
        <script
          defer
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

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        /> */}
        <meta name="fo-verify" content="99078900-a479-470d-b88b-0b406b195229" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflowX: "hidden" }}
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
          <ChakraProvider>
            <div className="page-content">
              {children}
            </div>
            <Footer />
            <ClientOnly fallback={<div>Loading Button...</div>}>
              <HushhButtonWrapper />
            </ClientOnly>
          </ChakraProvider>
        </ChakraBaseProvider>
      </body>
    </html>
  );
}