export const TELEGRAM_URL = "https://t.me/spunkytravel";

interface Service {
  id: string;
  name: string;
  desc: string;
  discount: string;
  icon: string;
  color: string;
  big?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "flights",
    name: "Flights",
    desc: "Save on domestic and international flights with deals of up to 50% off.",
    discount: "Up to 50% Off",
    icon: "plane",
    color: "sky",
    big: true,
  },
  {
    id: "hotels",
    name: "Hotels",
    desc: "Book hotel stays for less with discounts of up to 50% off.",
    discount: "Up to 50% Off",
    icon: "hotel",
    color: "pink",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    desc: "Unlock lower prices on unique stays and vacation bookings.",
    discount: "Up to 50% Off",
    icon: "home",
    color: "gold",
  },
  {
    id: "food",
    name: "Food & Dining",
    desc: "Get deals on restaurants, food delivery, and dining offers.",
    discount: "Up to 50% Off",
    icon: "food",
    color: "lime",
  },
  {
    id: "expedia",
    name: "Expedia",
    desc: "Bundled travel packages with exclusive codes.",
    discount: "Up to 50% Off",
    icon: "globe",
    color: "sky",
  },
  {
    id: "movies",
    name: "Movies",
    desc: "Discounted tickets for blockbusters and indie films.",
    discount: "Up to 50% Off",
    icon: "movie",
    color: "pink",
  },
  {
    id: "car-rentals",
    name: "Car Rentals",
    desc: "Hit the road for less with top companies.",
    discount: "Up to 50% Off",
    icon: "car",
    color: "gold",
  },
  {
    id: "bills",
    name: "Bill Payments",
    desc: "Pay your utility bills, subscriptions, and services at a discount. Yes — even your phone bill. It all adds up to hundreds saved monthly.",
    discount: "Up to 50% Off",
    icon: "card",
    color: "lime",
    big: true,
  },
  {
    id: "lowes",
    name: "Lowe's",
    desc: "Home improvement at prices that make sense.",
    discount: "Up to 50% Off",
    icon: "leaf",
    color: "sky",
  },
  {
    id: "academy",
    name: "Academy Sports",
    desc: "Gear up for less on sporting goods.",
    discount: "Up to 50% Off",
    icon: "sports",
    color: "lime",
  },
  {
    id: "experiences",
    name: "Experiences & Tickets",
    desc: "Concerts, theme parks, events — all discounted.",
    discount: "Up to 50% Off",
    icon: "ticket",
    color: "gold",
  },
];

export const STEPS = [
  {
    num: "01",
    title: "Browse Categories",
    desc: "Explore curated deals across flights, hotels, food, entertainment, home improvement and more.",
    icon: "search",
    color: "sky",
  },
  {
    num: "02",
    title: "Grab Your Deal",
    desc: "Select any offer and see the discount applied instantly. No promo codes — just a lower price, right there.",
    icon: "check",
    color: "pink",
  },
  {
    num: "03",
    title: "Enjoy & Repeat",
    desc: "Book, pay, or buy at the discounted rate. Come back daily — fresh deals drop across every category.",
    icon: "sparkle",
    color: "gold",
  },
];

export const REVIEWS = [
  {
    quote:
      "Saved $800 on flights and $200 on our hotel for our anniversary trip. I tell literally everyone about SpunkyTravels now.",
    name: "Jamie R.",
    since: "Member since 2024",
    initials: "JR",
    color: "pink",
  },
  {
    quote:
      "I use Spunky for Lowe's and bill payments every single month. I'm keeping an extra $150/mo in my pocket. It's nuts.",
    name: "Marcus T.",
    since: "Member since 2023",
    initials: "MT",
    color: "sky",
  },
  {
    quote:
      "Movie tickets, Airbnb, car rentals — all cheaper. It's a cheat code for everyday spending. Absolutely love it.",
    name: "Sarah P.",
    since: "Member since 2024",
    initials: "SP",
    color: "gold",
  },
];

export const MARQUEE_ITEMS = [
  "Flights",
  "Hotels",
  "Airbnb",
  "Food & Dining",
  "Lowe's",
  "Academy Sports",
  "Movies",
  "Car Rentals",
  "Bill Payments",
  "Expedia",
  "Experiences",
];

export const STATS = [
  { value: "$100K+", label: "Saved by Members" },
  { value: "2K+", label: "Happy Spunky Users" },
  { value: "50% OFF", label: "Average Discounts" },
  // { value: "500+", label: "Brand Partners" },
];

export const COLOR_MAP: Record<string, { bg: string; stroke: string; tagBg: string; tagText: string }> = {
  sky: {
    bg: "rgba(58,173,224,0.12)",
    stroke: "var(--sky)",
    tagBg: "var(--sky-light)",
    tagText: "var(--sky)",
  },
  pink: {
    bg: "var(--pink-light)",
    stroke: "var(--pink)",
    tagBg: "var(--pink-light)",
    tagText: "var(--pink)",
  },
  gold: {
    bg: "var(--gold-light)",
    stroke: "var(--brown)",
    tagBg: "var(--gold-light)",
    tagText: "var(--brown)",
  },
  lime: {
    bg: "var(--lime-light)",
    stroke: "var(--lime)",
    tagBg: "var(--lime-light)",
    tagText: "var(--lime)",
  },
};
