import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porto | Personal Profile",
  description:
    "Halaman profil personal untuk menampilkan skill, proyek, pengalaman, dan kontak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
