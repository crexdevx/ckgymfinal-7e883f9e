import type React from "react";
export const GYM = {
  name: "CK Gym",
  city: "Nalbari",
  address: "FF3V+RC6, Sondha, Nalbari, Assam 781369, India",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=CK+Gym+Sondha+Nalbari+Assam+781369",
  whatsappNumber: "919101515781",
  phoneDisplay: "+91 91015 15781",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${GYM.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Ensures the WhatsApp link opens even inside sandboxed/embedded frames. */
export function openWhatsApp(url: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
  };
}

export const WA_JOIN = whatsappLink(
  "Hello CK Gym, I am interested in joining the gym. Please share the membership details.",
);

export const WA_MONTHLY = whatsappLink(
  "Hello CK Gym, I am interested in the ₹500 monthly membership. Please share the details.",
);

export const WA_SIX_MONTH = whatsappLink(
  "Hello CK Gym, I am interested in the ₹3,000 6-month membership. Please share the details.",
);

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services / Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#visit" },
];
