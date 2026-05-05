"use client";

import { openConsentBanner } from "@/lib/cookie-consent";

export function ManageCookiesButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={openConsentBanner} className={className}>
      {children}
    </button>
  );
}
