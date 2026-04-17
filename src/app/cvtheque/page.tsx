"use client";

import { motion } from "framer-motion";
import { PlayCircle, User } from "lucide-react";
import { learners } from "@/data/learners";

export default function CVtheque() {
  const learnersWithVideo = learners.filter((l) => l.video);

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-blue font-semibold tracking-wider text-sm uppercase">
          Nos Talents
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
          CVthèque Vidéo
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Découvrez les CV vidéo de nos apprenants. Chaque vidéo présente leur
          parcours, leurs compétences et leur vision professionnelle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {learnersWithVideo.map((learner, i) => (
          <motion.div
            key={learner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glassmorphism rounded-2xl border border-white/5 overflow-hidden group hover:border-neon-blue/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]"
          >
            {/* Video Player */}
            <div className="relative aspect-video bg-dark-bg">
              <video
                src={`/Parcours_le.cartel${learner.video}`}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster=""
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-0 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <PlayCircle className="w-8 h-8 text-white ml-0.5" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  <User className="w-5 h-5 text-dark-bg" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg">
                    {learner.name}
                  </h3>
                  <p className="text-neon-blue text-sm font-medium">
                    {learner.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {learner.tools.map((tool, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learners without video */}
      {learners.filter((l) => !l.video).length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center text-gray-400">
            Vidéos en cours de production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {learners
              .filter((l) => !l.video)
              .map((learner, i) => (
                <motion.div
                  key={learner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glassmorphism rounded-2xl border border-white/5 overflow-hidden opacity-60"
                >
                  <div className="aspect-video bg-dark-bg flex flex-col items-center justify-center border-b border-white/5">
                    <PlayCircle size={48} className="text-gray-600 mb-3" />
                    <p className="text-gray-500 text-sm">Bientôt disponible</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <User className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-heading font-bold">
                          {learner.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{learner.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
