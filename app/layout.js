"use client";

import { useEffect } from "react";
import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";
// import BootstrapInit from "@/components/BootstrapInit";

// ========= Plugins CSS START =========
// import "../node_modules/sal.js/dist/sal.css";
// import "../public/css/plugins/fontawesome.min.css";
// import "../public/css/plugins/feather.css";
// import "../public/css/plugins/odometer.css";
// import "../public/css/plugins/animation.css";
// import "../public/css/plugins/euclid-circulara.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-cards";
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    // @ts-ignore - Bootstrap JS bundle doesn't have TypeScript declarations
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* <BootstrapInit /> */}
        {children}
      </body>
    </html>
  );
}
