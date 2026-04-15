import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parcours d'Inclusion via le E-sport et les Métiers du Numérique -- Session 2 -- Le C.A.R.T.E.L.",
  description: "De joueurs à créateurs du numérique : Découvrez les profils et les projets de notre parcours d'inclusion numérique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-dark-bg text-white relative min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-[-1]"></div>
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-purple/20 via-dark-bg/0 to-transparent"></div>
        
        <Navigation />
        <main className="flex-grow pt-24 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
