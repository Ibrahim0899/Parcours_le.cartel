"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal, Calendar, Clock, Sparkles, MapPin, Brain, Cpu, Rocket, MessagesSquare, Code, Users } from "lucide-react";

export default function Home() {
  const formatStats = [
    { label: "Durée totale", value: "5", suffix: "Semaines", icon: <Calendar className="w-5 h-5" /> },
    { label: "Rythme équilibré", value: "3", suffix: "Jours / sem.", icon: <Clock className="w-5 h-5" /> },
    { label: "Formation complète", value: "15", suffix: "Journées", icon: <Sparkles className="w-5 h-5" /> },
    { label: "Lieu", value: "Csform", suffix: "Créteil", icon: <MapPin className="w-5 h-5" /> },
  ];

  const phases = [
    {
      title: "Semaine 1 : Découverte et Fondations",
      icon: <Brain className="w-8 h-8 text-neon-blue" />,
      color: "neon-blue",
      features: [
        "Immersion dans l'univers de l'e-sport et panorama des métiers IT.",
        "Préparation mentale, santé et techniques de gestion du stress.",
        "Conception d'une identité de marque personnelle pour le secteur IT."
      ]
    },
    {
      title: "Semaines 2-3 : Compétences Digitales",
      icon: <Cpu className="w-8 h-8 text-neon-purple" />,
      color: "neon-purple",
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
      color: "neon-pink",
      features: [
        "Réalisation d'un projet numérique collaboratif et professionnalisant.",
        "Coaching individuel personnalisé pour affiner le projet pro.",
        "Présentation et restitution finale devant des recruteurs (Le C.A.R.T.E.L.)."
      ]
    }
  ];

  const axes = [
    { title: "Contact Client", desc: "Approche orientée relation client et support utilisateur", icon: <MessagesSquare className="w-6 h-6 text-neon-blue" /> },
    { title: "Technique Pure", desc: "Développement informatique et infrastructure", icon: <Code className="w-6 h-6 text-neon-purple" /> },
    { title: "Autodidacte", desc: "Approche autonome et apprentissage technologique continu", icon: <Brain className="w-6 h-6 text-neon-pink" /> },
    { title: "Créativité & Services", desc: "Optimisation de l'expérience et des services numériques", icon: <Users className="w-6 h-6 text-white" /> },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-24 md:py-32 overflow-hidden min-h-[70vh]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/Parcours_le.cartel/images/hero-bg.png"
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
            <Terminal size={16} /> Parcours d&apos;Inclusion via le E-sport • Session 2
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight max-w-4xl"
          >
            Construisez votre <span className="text-glow gradient-text">projet professionnel dans le numérique</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            15 journées pour découvrir les métiers du numérique et de l&apos;E-sport. Découvrez une équipe de talents formés aux outils digitaux accélérés par l&apos;IA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/cvtheque"
              className="px-8 py-4 rounded-lg bg-neon-blue text-dark-bg font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Découvrir les talents <ArrowRight size={20} />
            </Link>
            <Link
              href="/pitch"
              className="px-8 py-4 rounded-lg glassmorphism text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Voir les Pitchs
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

      {/* Stats Section */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-neon-pink font-semibold tracking-wider text-sm uppercase">Le Programme</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Le Parcours en Chiffres</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {formatStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Déroulement du Parcours</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Un programme structuré en 3 phases pour une montée en compétences progressive</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glassmorphism p-8 rounded-2xl border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl shrink-0 border border-white/10">
                  {phase.icon}
                </div>
                <div>
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
      </section>

      {/* Axes Métiers */}
      <section className="container mx-auto px-6 md:px-12 py-16">
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
      </section>
    </div>
  );
}
