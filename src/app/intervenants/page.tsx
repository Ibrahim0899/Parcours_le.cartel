"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Code } from "lucide-react";

export default function Intervenants() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-pink font-semibold tracking-wider text-sm uppercase">L'équipe Pédagogique</span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">Intervenants & Formateurs</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Découvrez les experts du numérique, professionnels de l'IT et acteurs de l'e-sport qui accompagnent nos talents tout au long de leur reconversion.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center py-24 glassmorphism border border-white/5 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/5 blur-[80px] pointer-events-none"></div>
        <Users className="w-16 h-16 text-neon-pink/40 mb-6 relative z-10" />
        <h2 className="text-2xl font-bold font-heading text-white mb-2 relative z-10">Profils en cours d'intégration...</h2>
        <p className="text-gray-400 text-sm mt-2 relative z-10 max-w-md text-center">
          Les informations concernant nos encadrants, mentors techniques et experts extérieurs arrivent très bientôt !
        </p>
      </div>
    </div>
  );
}
