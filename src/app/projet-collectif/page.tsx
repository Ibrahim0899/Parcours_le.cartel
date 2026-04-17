"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle, Film, Users, Lightbulb, Clapperboard } from "lucide-react";

export default function ProjetCollectif() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-blue font-semibold tracking-wider text-sm uppercase">
          Réalisation collective
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
          Projet Collectif
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Le trailer réalisé collectivement par nos apprenants, démontrant leur
          maîtrise des outils de création numérique et de montage vidéo.
        </p>
      </motion.div>

      {/* Trailer Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="relative rounded-3xl overflow-hidden glassmorphism p-2 border border-neon-blue/20 shadow-[0_0_60px_rgba(0,240,255,0.08)]">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-bg group">
            {/* Placeholder — remplacer par la vraie vidéo quand disponible */}
            {/* <video src="/videos/trailer.mp4" controls className="w-full h-full object-cover" /> */}
            <Image
              src="/Parcours_le.cartel/images/project-preview.png"
              alt="Aperçu du projet collectif"
              fill
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                <PlayCircle className="w-10 h-10 text-white ml-1" />
              </motion.div>
              <p className="text-white/80 font-heading font-bold text-lg">
                Trailer — Bientôt disponible
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="glassmorphism p-8 rounded-2xl border border-white/5 text-center group hover:border-neon-blue/30 transition-colors"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 border border-white/10 group-hover:border-neon-blue/30 transition-colors">
            <Film className="w-7 h-7 text-neon-blue" />
          </div>
          <h3 className="font-heading font-bold text-white text-lg mb-2">
            Montage Vidéo
          </h3>
          <p className="text-sm text-gray-400">
            Réalisation d&apos;un trailer promotionnel mettant en avant le
            parcours et les compétences acquises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glassmorphism p-8 rounded-2xl border border-white/5 text-center group hover:border-neon-purple/30 transition-colors"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 border border-white/10 group-hover:border-neon-purple/30 transition-colors">
            <Users className="w-7 h-7 text-neon-purple" />
          </div>
          <h3 className="font-heading font-bold text-white text-lg mb-2">
            Travail d&apos;Équipe
          </h3>
          <p className="text-sm text-gray-400">
            Un projet collaboratif où chaque membre a apporté ses compétences
            uniques pour un résultat commun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glassmorphism p-8 rounded-2xl border border-white/5 text-center group hover:border-neon-pink/30 transition-colors"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 border border-white/10 group-hover:border-neon-pink/30 transition-colors">
            <Lightbulb className="w-7 h-7 text-neon-pink" />
          </div>
          <h3 className="font-heading font-bold text-white text-lg mb-2">
            Créativité IA
          </h3>
          <p className="text-sm text-gray-400">
            Utilisation des outils d&apos;IA (Higgsfield, CapCut, ChatGPT) pour
            accélérer la production créative.
          </p>
        </motion.div>
      </div>

      {/* Tools used */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glassmorphism border border-white/10">
          <Clapperboard className="w-5 h-5 text-neon-blue" />
          <span className="text-gray-400 text-sm">
            Réalisé avec CapCut, Higgsfield, Gamma &amp; ChatGPT
          </span>
        </div>
      </motion.div>
    </div>
  );
}
