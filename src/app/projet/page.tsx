"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function Projet() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-blue font-semibold tracking-wider text-sm uppercase">Réalisation</span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">Projet Collectif</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Découvrez la plateforme développée par nos apprenants, consolidant l'ensemble de leurs compétences acquises.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Project Video / Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden glassmorphism p-2 border border-neon-blue/20"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-bg group cursor-pointer">
            <Image 
              src="/images/project-preview.png" 
              alt="Project Overview" 
              fill 
              className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-6">Plateforme "Cybernetics"</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Conçue intégralement en 5 jours, cette application web intègre un tableau de bord analytique simulant les données en temps réel.
          </p>
          
          <div className="space-y-6">
            <div className="p-4 rounded-xl glassmorphism border border-white/5">
              <h3 className="text-neon-pink font-semibold mb-2">L'Objectif</h3>
              <p className="text-sm text-gray-400">Créer une interface complexe alliant design premium et intégration front-end structurée.</p>
            </div>
            
            <div className="p-4 rounded-xl glassmorphism border border-white/5">
              <h3 className="text-neon-blue font-semibold mb-2">Les Outils</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Next.js', 'Tailwind', 'Framer Motion', 'ChatGPT (Génération Code)', 'Figma'].map(tool => (
                  <span key={tool} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
