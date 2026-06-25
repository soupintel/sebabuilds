import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Mono,
  Cormorant_Garamond,
  Lato,
  Bebas_Neue,
  Source_Sans_3,
  Pacifico,
  Nunito,
  Space_Mono,
  Syne,
  Inter,
} from "next/font/google";
import "./globals.css";

// Editorial
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

// Spiritual
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

// Rugged
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

// Tropical
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

// Minimal
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

// CTA
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fontVariables = [
  playfair.variable,
  dmMono.variable,
  cormorant.variable,
  lato.variable,
  bebas.variable,
  sourceSans.variable,
  pacifico.variable,
  nunito.variable,
  spaceMono.variable,
  syne.variable,
  inter.variable,
].join(" ");

export const metadata: Metadata = {
  title: "sebabuilds — freelance web developer",
  description:
    "Websites that morph as you scroll. Freelance web development by sebabuilds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Start on the editorial theme; ScrollTheme.tsx takes over on scroll.
  return (
    <html lang="en" data-theme="editorial" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
