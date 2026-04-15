"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Le Parcours", href: "/parcours" },
  { name: "Intervenants", href: "/intervenants" },
  { name: "Apprenants", href: "/apprenants" },
  { name: "Projet", href: "/projet" },
  { name: "Partenariat", href: "/partenariat" },
  { name: "Impact & Vision", href: "/impact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glassmorphism py-3 border-white/10" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Gamepad2 className="w-8 h-8 text-neon-blue group-hover:text-neon-pink transition-colors" />
          <span className="font-heading font-bold text-xl tracking-wider text-glow hidden sm:block">
            LE C.A.R.T.E.L<span className="text-neon-pink">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-neon-blue",
                  isActive ? "text-neon-blue relative" : "text-gray-300"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full mt-1 h-0.5 w-full bg-neon-blue shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                  />
                )}
              </Link>
            );
          })}
          
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-white/5 border border-neon-pink/50 text-neon-pink font-semibold hover:bg-neon-pink hover:text-white hover:shadow-[0_0_20px_rgba(255,0,60,0.6)] transition-all duration-300 text-sm"
          >
            Nous contacter
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-neon-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glassmorphism border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-lg font-medium",
                pathname === link.href ? "text-neon-blue" : "text-gray-300"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 text-center py-3 rounded-lg bg-neon-pink/20 border border-neon-pink/50 text-neon-pink font-bold"
            onClick={() => setIsOpen(false)}
          >
            Nous contacter
          </Link>
        </motion.div>
      )}
    </header>
  );
}
