"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, User, Code2 } from "lucide-react";
import { learners } from "@/data/learners";
import clsx from "clsx";

const gradients = [
  "from-neon-blue/20 to-neon-purple/10",
  "from-neon-pink/20 to-neon-purple/10",
  "from-neon-purple/20 to-neon-blue/10",
  "from-neon-blue/20 to-neon-pink/10",
  "from-neon-pink/20 to-neon-blue/10",
  "from-neon-purple/20 to-neon-pink/10",
];

export default function ProjetPerso() {
  const withPortfolio = learners.filter((l) => l.portfolio);
  const withoutPortfolio = learners.filter((l) => !l.portfolio);

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-purple font-semibold tracking-wider text-sm uppercase">
          Réalisations individuelles
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
          Projets Perso
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Chaque apprenant a créé son propre site web portfolio. Consultez leurs
          réalisations et découvrez leur univers professionnel.
        </p>
      </motion.div>

      {/* Portfolios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {withPortfolio.map((learner, i) => (
          <motion.a
            key={learner.id}
            href={learner.portfolio!}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="block glassmorphism rounded-2xl border border-white/5 overflow-hidden group hover:border-neon-purple/40 hover:shadow-[0_0_50px_rgba(138,43,226,0.12)] transition-all duration-500"
          >
            {/* Gradient Header */}
            <div
              className={clsx(
                "h-32 relative bg-gradient-to-br",
                gradients[i % gradients.length]
              )}
            >
              <div className="absolute inset-0 bg-dark-bg/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg"
                >
                  <Globe className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* External link indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium border border-white/10 group-hover:bg-white/20 transition-colors">
                <ExternalLink className="w-3 h-3" />
                Visiter
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-lg group-hover:text-neon-purple transition-colors">
                    {learner.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{learner.role}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <Code2 className="w-4 h-4" />
                <span className="truncate">{learner.portfolio}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Without portfolio */}
      {withoutPortfolio.length > 0 && (
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-xl font-heading font-bold mb-6 text-center text-gray-400">
            Portfolios en construction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {withoutPortfolio.map((learner, i) => (
              <motion.div
                key={learner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glassmorphism rounded-2xl border border-white/5 p-6 opacity-60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-bold">
                      {learner.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{learner.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Bientôt disponible
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
