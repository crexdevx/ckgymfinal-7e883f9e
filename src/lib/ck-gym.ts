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
  return `whatsapp://send?phone=${GYM.whatsappNumber}&text=${encodeURIComponent(message)}`;
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
