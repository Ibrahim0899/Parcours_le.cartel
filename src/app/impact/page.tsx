"use client";

import { motion } from "framer-motion";
import { GraduationCap, Network, RefreshCcw, TrendingUp, Rocket, CheckCircle2 } from "lucide-react";

export default function Impact() {
  const outcomes = [
    { title: "Orientation Spécialisée", desc: "Accès facilité à des écoles spécialisées dans le numérique et l'e-sport.", icon: <GraduationCap /> },
    { title: "Réseau Professionnel", desc: "Création d'un réseau solide dans l'industrie avec des acteurs clés.", icon: <Network /> },
    { title: "Reconversion", desc: "Une véritable opportunité de reconversion professionnelle vers le secteur IT.", icon: <RefreshCcw /> },
    { title: "Montée en Compétence", desc: "Remise à niveau intensive et développement de nouvelles compétences digitales.", icon: <TrendingUp /> },
    { title: "Industrie en Essor", desc: "Découverte profonde d'un secteur dynamique, passionnant et en pleine croissance.", icon: <Rocket /> },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-purple font-semibold tracking-wider text-sm uppercase">Vos Opportunités</span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">Impact & Vision</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Ce parcours d'inclusion représente une opportunité unique de transformer votre passion pour le numérique et l'e-sport en une carrière prometteuse.
        </p>
      </motion.div>

      {/* Vision Globale / Call to Action */}
      <div className="max-w-4xl mx-auto rounded-3xl glassmorphism p-8 border border-white/10 relative overflow-hidden mb-24 shadow-[0_0_40px_rgba(188,19,254,0.15)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/5 blur-[100px] pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-center">
          <div className="p-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-neon-blue/10 text-neon-blue flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <CheckCircle2 />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Définissez Votre Projet</h3>
            <p className="text-sm text-gray-400">Clarifiez vos objectifs professionnels grâce à un accompagnement ciblé.</p>
          </div>
          <div className="p-4 md:border-l md:border-r border-white/10">
            <div className="w-12 h-12 mx-auto rounded-full bg-neon-purple/10 text-neon-purple flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(188,19,254,0.3)]">
              <Rocket />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Lancez Votre Carrière</h3>
            <p className="text-sm text-gray-400">Accédez aux métiers d'avenir du numérique et de l'IT avec assurance.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-neon-pink/10 text-neon-pink flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,0,60,0.3)]">
              <Network />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Créez Votre Réseau</h3>
            <p className="text-sm text-gray-400">Connectez-vous avec des professionnels et recruteurs du secteur.</p>
          </div>
        </div>
      </div>

      {/* Outcomes Grid */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-heading font-bold mb-2">Les Issues Professionnelles</h2>
        <p className="text-gray-400 text-sm">Les portes que le parcours Le C.A.R.T.E.L. vous ouvre.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {outcomes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`p-8 rounded-2xl glassmorphism border border-white/5 text-left group hover:border-neon-purple/50 transition-all duration-300 ${i === 3 || i === 4 ? "lg:col-span-1" : ""}`}
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 group-hover:text-neon-purple transition-colors duration-300 shadow-lg">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
