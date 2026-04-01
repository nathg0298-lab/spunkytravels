import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spunky Travel Market — Save Big on Everything",
  description:
    "Massive discounts on flights, hotels, food, entertainment, car rentals, bill payments, and more — all from one playful marketplace.",
  openGraph: {
    title: "Spunky Travel Market — Save Big on Everything",
    description:
      "Unlock massive discounts on flights, hotels, food, Airbnb, Lowe's, movies, car rentals, bill payments & more.",
    images: ["/spunky-mascot.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spunky Travel Market",
    description:
      "Save up to 45% on flights, hotels, food, entertainment & more.",
    images: ["/spunky-mascot.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
