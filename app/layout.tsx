import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Africa Hardware Plumbing & Electrical | Best Prices in Alberton",
  description:
    "Alberton's go-to hardware store for plumbing, electrical & building supplies. Guaranteed to beat any price. Same-day delivery available. Open 6:30 AM.",
  keywords:
    "hardware store Alberton, plumbing supplies, electrical supplies, building materials, best prices, Alberton hardware",
  openGraph: {
    title: "Africa Hardware Plumbing & Electrical",
    description:
      "Guaranteed to beat any price. Quality products, unbeatable pricing, and real service.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HardwareStore",
              name: "Africa Hardware Plumbing & Electrical",
              image: "",
              "@id": "",
              url: "",
              telephone: "+27780816467",
              address: {
                "@type": "PostalAddress",
                streetAddress: "39 Penzance St",
                addressLocality: "New Redruth",
                addressRegion: "Alberton",
                postalCode: "1449",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2519,
                longitude: 28.1225,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "06:30",
                closes: "17:00",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "50",
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
