import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Coffee Sirpang — Kopi Persimpangan",
  description:
    "Coffee Sirpang adalah ruang pertemuan berbagai cerita, ide, dan perjalanan hidup. Setiap persimpangan punya cerita.",
  keywords: ["Coffee Sirpang", "Kopi Persimpangan", "coffee shop", "kopi", "Batak", "premium coffee"],
  openGraph: {
    title: "Coffee Sirpang — Kopi Persimpangan",
    description:
      "Menyajikan kopi berkualitas dalam ruang yang menghubungkan cerita, inspirasi, dan perjalanan hidup.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
