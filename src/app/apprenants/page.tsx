"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { learners } from "@/data/learners";

export default function Apprenants() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-pink font-semibold tracking-wider text-sm uppercase">La promotion</span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">Les Apprenants</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Nos profils aux compétences certifiées, prêts à s'intégrer dans vos équipes digitales. Cliquez sur un profil pour découvrir son pitch et sa présentation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {learners.map((learner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden glassmorphism border border-white/5 hover:border-neon-blue/50 transition-all duration-300"
          >
            <div className="relative h-64 w-full bg-dark-bg cursor-pointer">
              {learner.video ? (
                <video 
                  src={learner.video} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  muted
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
              ) : (
                <Image 
                  src={learner.image} 
                  alt={learner.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <h3 className="text-xl font-bold font-heading text-white">{learner.name}</h3>
                <p className="text-neon-blue text-sm mb-3">{learner.role}</p>
                
                <div className="flex gap-2 mb-4">
                  {learner.tools.map((tool, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Redirection Link Overlay */}
              <Link href={`/apprenants/${learner.id}`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-neon-blue text-dark-bg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:bg-white hover:text-dark-bg">
                  <UserPlus size={18} /> Découvrir le profil
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
