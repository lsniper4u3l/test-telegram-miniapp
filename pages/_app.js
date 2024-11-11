// pages/_app.js
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
