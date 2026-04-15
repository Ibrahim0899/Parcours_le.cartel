"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-6rem)]">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center py-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/hero-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-30 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 border-neon-blue/30 text-neon-blue font-medium text-sm text-center"
          >
            <Terminal size={16} /> Parcours d'Inclusion via le E-sport et les Métiers du Numérique • Session 2 • Le C.A.R.T.E.L.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight max-w-4xl"
          >
            De joueurs à <span className="text-glow gradient-text">créateurs du numérique</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            15 jours pour transformer la passion du jeu vidéo en trajectoire professionnelle. Découvrez une équipe de talents formés aux outils digitaux accélérés par l'IA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/apprenants"
              className="px-8 py-4 rounded-lg bg-neon-blue text-dark-bg font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Découvrir les talents <ArrowRight size={20} />
            </Link>
            <Link
              href="/parcours"
              className="px-8 py-4 rounded-lg glassmorphism text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Le Programme
            </Link>
          </motion.div>
        </div>
        
        {/* Animated abstract elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] z-[-1]"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-neon-blue/20 rounded-full blur-[120px] z-[-1]"
        />
      </section>
    </div>
  );
}
