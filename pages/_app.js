// pages/_app.js
import { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.css"; // ใช้ไฟล์ CSS หลักของโปรเจค (ถ้ามี)

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // เริ่มต้น Web App SDK ของ Telegram
    if (typeof window !== "undefined") {
      const WebApp = window.Telegram.WebApp;
      WebApp.ready();
    }
  }, []);

  return (
    <>
      {/* โหลด SDK ของ Telegram */}
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
