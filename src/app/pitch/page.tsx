"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, User, Briefcase } from "lucide-react";
import { learners } from "@/data/learners";
import clsx from "clsx";

const accentColors = [
  "text-neon-blue",
  "text-neon-pink",
  "text-neon-purple",
  "text-neon-blue",
  "text-neon-pink",
  "text-neon-purple",
];

const borderColors = [
  "hover:border-neon-blue/40",
  "hover:border-neon-pink/40",
  "hover:border-neon-purple/40",
  "hover:border-neon-blue/40",
  "hover:border-neon-pink/40",
  "hover:border-neon-purple/40",
];

export default function Pitch() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-neon-pink font-semibold tracking-wider text-sm uppercase">
          Parcours individuels
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
          Les Pitchs
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Chaque apprenant a construit son pitch professionnel. Découvrez leur
          vision, leurs compétences et leur projet d&apos;avenir.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {learners.map((learner, i) => {
          const isOpen = openId === learner.id;
          return (
            <motion.div
              key={learner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={clsx(
                "glassmorphism rounded-2xl border border-white/5 overflow-hidden transition-all duration-500",
                borderColors[i % borderColors.length],
                isOpen && "shadow-[0_0_40px_rgba(0,0,0,0.3)]"
              )}
            >
              {/* Header - clickable */}
              <button
                onClick={() => toggle(learner.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={clsx(
                      "w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0"
                    )}
                  >
                    <User
                      className={clsx("w-6 h-6", accentColors[i % accentColors.length])}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white">
                      {learner.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase
                        className={clsx(
                          "w-3.5 h-3.5",
                          accentColors[i % accentColors.length]
                        )}
                      />
                      <span
                        className={clsx(
                          "text-sm font-medium",
                          accentColors[i % accentColors.length]
                        )}
                      >
                        {learner.role}
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                      <div className="text-gray-300 leading-relaxed text-[0.95rem] whitespace-pre-wrap">
                        {learner.pitch}
                      </div>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {learner.tools.map((tool, j) => (
                          <span
                            key={j}
                            className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
