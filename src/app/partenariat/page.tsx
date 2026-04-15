"use client";

import { motion } from "framer-motion";
import { Handshake, Building2 } from "lucide-react";

export default function Partenariat() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-blue font-semibold tracking-wider text-sm uppercase">Nos Partenaires</span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">Partenariat</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Un grand merci aux entreprises et institutions qui rendent le programme Le C.A.R.T.E.L. possible et qui s'engagent face aux enjeux de l'inclusion numérique.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center py-24 glassmorphism border border-white/5 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-blue/5 blur-[80px] pointer-events-none"></div>
        <Handshake className="w-16 h-16 text-neon-blue/40 mb-6 relative z-10" />
        <h2 className="text-2xl font-bold font-heading text-white mb-2 relative z-10">Partenaires en cours d'intégration...</h2>
        <p className="text-gray-400 text-sm mt-2 relative z-10 max-w-md text-center">
          Les logos et détails des collaborations de soutien seront affichés sur ce panneau très prochainement.
        </p>
      </div>
    </div>
  );
}
