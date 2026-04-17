"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench } from "lucide-react";

const tools = [
  { name: "ChatGPT", file: "chatgpt.png", desc: "IA conversationnelle pour la génération de texte et d'idées" },
  { name: "Antigravity", file: "antigravity.jpeg", desc: "Agent IA de développement et pair-programming avancé" },
  { name: "Claude", file: "claude.jpeg", desc: "Assistant IA pour l'analyse et la création de contenu" },
  { name: "Gemini", file: "gemini.jpeg", desc: "IA multimodale de Google pour la recherche et création" },
  { name: "Gamma", file: "gamma.jpeg", desc: "Création de présentations professionnelles assistée par IA" },
  { name: "Higgsfield", file: "higgsfield.jpeg", desc: "Génération de vidéos et d'avatars par intelligence artificielle" },
  { name: "CapCut", file: "capcut.png", desc: "Montage vidéo professionnel et effets créatifs" },
  { name: "LinkedIn", file: "linkedin.png", desc: "Réseau professionnel pour la recherche d'emploi et le networking" },
];

export default function Outils() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-purple font-semibold tracking-wider text-sm uppercase">
          Technologies
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
          Outils Utilisés
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Les outils digitaux et IA maîtrisés par nos apprenants durant le
          parcours. Une boîte à outils moderne pour le monde professionnel.
        </p>
      </motion.div>

      {/* Decorative line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent mb-16"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glassmorphism rounded-2xl border border-white/5 p-6 flex flex-col items-center text-center group hover:border-neon-purple/40 hover:shadow-[0_0_40px_rgba(138,43,226,0.15)] transition-all duration-500 cursor-default"
          >
            {/* Logo */}
            <div className="relative w-20 h-20 mb-5 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg group-hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-shadow duration-500">
              <Image
                src={`/Parcours_le.cartel/logos/${tool.file}`}
                alt={tool.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Name */}
            <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-neon-purple transition-colors">
              {tool.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed">
              {tool.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glassmorphism border border-white/10">
          <Wrench className="w-5 h-5 text-neon-purple" />
          <span className="text-gray-400 text-sm">
            Maîtrise technologique accélérée par l&apos;IA
          </span>
        </div>
      </motion.div>
    </div>
  );
}
