"use client";

import { useEffect } from "react";

export default function BootstrapInit() {
  useEffect(() => {
    // @ts-ignore - Bootstrap JS bundle doesn't have TypeScript declarations
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
