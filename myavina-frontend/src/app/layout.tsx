// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

// ====== SEO: Metadata ======
const siteName = "MyAvina"; // TODO: your brand
const siteUrl = "https://www.myavina.com"; // TODO: your canonical domain
const siteDescription =
  "Personalized menopause care, trusted supplements, and expert guidance — feel balanced and confident with MyAvina."; // TODO

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Menopause Care Made Personal`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "menopause",
    "perimenopause",
    "women's health",
    "hormone balance",
    "supplements",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — Menopause Care Made Personal`,
    description: siteDescription,
    images: [
      {
        url: "/og/og-image.jpg", // TODO: 1200x630 image
        width: 1200,
        height: 630,
        alt: `${siteName} — Menopause Care`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Menopause Care Made Personal`,
    description: siteDescription,
    images: ["/og/og-image.jpg"], // TODO
    creator: "@yourhandle", // TODO (or remove)
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "health",
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
};

// Optional: viewport hints
export const viewport: Viewport = {
  themeColor: "#774180",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ====== Root Layout ======
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Basic Organization JSON-LD (extend as needed)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/icons/icon-192.png`,
    sameAs: [
      // TODO: add your social links or remove array
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://x.com/yourhandle",
    ],
  };

  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>

        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
