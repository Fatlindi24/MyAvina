import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header"; // Adjust path if needed
import { Footer } from "@/components/Footer"; // Adjust path if needed

// Using a font that matches the design aesthetic
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "MyAvina",
  description: "Personalized treatments for women's health and wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        {/* A Footer component could be added here */}
        <Footer />
      </body>
    </html>
  );
}