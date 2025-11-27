"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1000); // delay for elegance
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);

    // TODO
    // Enable GA4 if installed later
    // if (typeof window !== "undefined" && (window as any).gtag) {
    //   (window as any).gtag("consent", "update", {
    //     ad_storage: "granted",
    //     analytics_storage: "granted",
    //   });
    // }
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-2xl
        bg-white/90 backdrop-blur-xl
        border border-[#d4af37]/60
        rounded-2xl
        p-4
        shadow-lg
        flex flex-col md:flex-row items-center justify-between gap-3
        z-9999
        animate-fade-in
      "
    >
      <p className="text-gray-800 text-center md:text-left">
        We use cookies to improve your experience and to help us understand our
        traffic. By using our site, you accept our cookie policy.
      </p>

      <button
        onClick={acceptCookies}
        className="
          px-6 py-2 rounded-md text-white font-medium
          bg-linear-to-r from-[#d4af37] to-[#e7d083]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
          hover:brightness-110 transition
          cursor-pointer
          whitespace-nowrap
        "
      >
        Accept
      </button>
    </div>
  );
}
