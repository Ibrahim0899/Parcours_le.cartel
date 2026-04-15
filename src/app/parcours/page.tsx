"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, Rocket, Calendar, MapPin, Clock, Brain, Users, Code, MessagesSquare } from "lucide-react";
import ToolsMarquee from "@/components/ToolsMarquee";

export default function Parcours() {
  const formatStats = [
    { label: "Durée totale", value: "5", suffix: " Semaines", icon: <Calendar /> },
    { label: "Rythme équilibré", value: "3", suffix: " Jours / sem.", icon: <Clock /> },
    { label: "Formation complète", value: "15", suffix: " Journées", icon: <Sparkles /> },
    { label: "Lieu", value: "Csform", suffix: " Créteil", icon: <MapPin /> },
  ];

  const axes = [
    { title: "Contact Client", desc: "Approche orientée relation client et support utilisateur", icon: <MessagesSquare className="w-6 h-6 text-neon-blue" /> },
    { title: "Technique Pure", desc: "Développement informatique et infrastructure", icon: <Code className="w-6 h-6 text-neon-purple" /> },
    { title: "Autodidacte", desc: "Approche autonome et apprentissage technologique continu", icon: <Brain className="w-6 h-6 text-neon-pink" /> },
    { title: "Créativité & Services", desc: "Optimisation de l'expérience et des services numériques", icon: <Users className="w-6 h-6 text-white" /> },
  ];

  const phases = [
    {
      title: "Semaine 1 : Découverte et Fondations",
      icon: <Brain className="w-8 h-8 text-neon-blue" />,
      features: [
        "Immersion dans l'univers de l'e-sport et panorama des métiers IT.",
        "Préparation mentale, santé et techniques de gestion du stress.",
        "Conception d'une identité de marque personnelle pour le secteur IT."
      ]
    },
    {
      title: "Semaines 2-3 : Compétences Digitales",
      icon: <Cpu className="w-8 h-8 text-neon-purple" />,
      features: [
        "Appréhension des outils essentiels de communication numérique.",
        "Décryptage approfondi de l'écosystème IT et E-sport.",
        "Visite immersive au sein d'une entreprise leader de l'IT.",
        "Découverte de l'IA et initiation à la programmation."
      ]
    },
    {
      title: "Semaines 4-5 : Projet et Insertion",
      icon: <Rocket className="w-8 h-8 text-neon-pink" />,
      features: [
        "Réalisation d'un projet numérique collaboratif et professionnalisant.",
        "Coaching individuel personnalisé pour affiner le projet pro.",
        "Présentation et restitution finale devant des recruteurs (Le C.A.R.T.E.L.)."
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-pink font-semibold tracking-wider text-sm uppercase">Le Programme</span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">Le Parcours d'Inclusion</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          15 journées immersives pour découvrir les métiers du futur et construire votre projet professionnel dans l'univers du numérique et de l'e-sport.
        </p>
      </motion.div>

      {/* Format & Chiffres */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {formatStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glassmorphism p-6 rounded-2xl border border-white/5 text-center group hover:border-neon-blue/50 transition-colors"
          >
            <div className="flex justify-center mb-3 text-neon-blue group-hover:scale-110 transition-transform">{stat.icon}</div>
            <div className="text-3xl font-black font-heading text-white">{stat.value}</div>
            <div className="text-sm font-semibold text-neon-blue mb-1">{stat.suffix}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline du Programme */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold">Déroulement Structuré</h2>
        </div>
        
        {/* Ligne centrale */}
        <div className="absolute left-[39px] md:left-1/2 top-16 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink opacity-30 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

        {phases.map((phase, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`relative flex flex-col sm:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="hidden sm:block w-full md:w-5/12"></div>
            
            <div className="z-10 flex items-center justify-center w-20 h-20 rounded-full bg-dark-bg border-4 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] shrink-0 my-4 sm:my-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              {phase.icon}
            </div>
            
            <div className="w-full md:w-5/12">
              <div className="glassmorphism p-8 rounded-2xl relative group overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-heading font-bold mb-4 text-white">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.features.map((item, id) => (
                    <li key={id} className="text-gray-400 text-sm flex items-start gap-2">
                       <span className="text-neon-blue mt-1">▹</span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Axes Métiers */}
      <div className="max-w-5xl mx-auto bg-black/40 p-8 md:p-12 rounded-3xl border border-white/5">
        <h2 className="text-3xl font-heading font-bold mb-4 text-center">4 Axes Métiers Clés</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto text-sm">
          Plutôt que de parler de métiers spécifiques, le parcours aborde de grandes approches pour permettre une orientation réussie vers les écoles spécialisées ou la reconversion IT.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {axes.map((axe, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 glassmorphism rounded-xl border border-white/5"
            >
              <div className="p-3 bg-white/5 rounded-lg shrink-0">
                {axe.icon}
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{axe.title}</h3>
                <p className="text-sm text-gray-400">{axe.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ToolsMarquee />
    </div>
  );
}
