import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const basierNarrowMedium = localFont({
  src: "../public/font/BasierSquareNarrow-Medium.ttf",
  variable: "--font-basier-narrow-medium",
});

const basierNarrowRegular = localFont({
  src: "../public/font/BasierSquareNarrow-Regular.ttf",
  variable: "--font-basier-narrow-regular",
});

const maziusBold = localFont({
  src: "../public/font/MaziusDisplay-Bold.otf",
  variable: "--font-mazius-bold",
});

const maziusExtraItalic = localFont({
  src: "../public/font/MaziusDisplay-Extraitalic.otf",
  variable: "--font-mazius-extraitalic",
});

const basierCircleRegular = localFont({
  src: "../public/BasierCircle-Regular.otf",
  variable: "--font-basier-circle-regular",
});

const maziusRegular = localFont({
  src: "../public/MaziusDisplay-Regular.otf",
  variable: "--font-mazius-regular",
});

const inter = localFont({
  src: "../public/font/Inter-Regular.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Great Residential HACC",
  description:
    "Join the greatest minds - Bringing together top builders from India to create and innovate. A unique residential hackathon experience.",
  keywords: [
    "hackathon",
    "residential",
    "india",
    "builders",
    "innovation",
    "tech",
    "community",
  ],
  authors: [{ name: "HACC" }],
  creator: "HACC",
  publisher: "HACC",
  robots: "index, follow",
  themeColor: "#6B21A8", // Purple theme color from the UI
  viewport: "width=device-width, initial-scale=1",
  applicationName: "The Great Residential HACC",
  metadataBase: new URL("https://thegreatresidentialhacc.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://thegreatresidentialhacc.com",
    title: "The Great Residential HACC",
    description:
      "Join the greatest minds - Bringing together top builders from India to create and innovate. A unique residential hackathon experience.",
    images: {
      url: "/meta-image.png",
      width: 1200,
      height: 630,
      alt: "The Great Residential HACC - Join the greatest minds",
    },
    siteName: "The Great Residential HACC",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "The Great Residential HACC",
    description:
      "Join the greatest minds - Bringing together top builders from India to create and innovate. A unique residential hackathon experience.",
    images: "/meta-image.png",
    creator: "@hacc",
  },

  // Additional metadata
  category: "Technology",
  classification: "Hackathon",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${basierNarrowMedium.variable} ${basierNarrowRegular.variable} ${maziusBold.variable} ${maziusExtraItalic.variable} ${basierCircleRegular.variable} ${maziusRegular.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
