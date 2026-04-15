"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { name: "Antigravity", file: "antigravity.jpeg" },
  { name: "CapCut", file: "capcut.png" },
  { name: "ChatGPT", file: "chatgpt.png" },
  { name: "Claude", file: "claude.jpeg" },
  { name: "Gamma", file: "gamma.jpeg" },
  { name: "Gemini", file: "gemini.jpeg" },
  { name: "Higgsfield", file: "higgsfield.jpeg" },
  { name: "LinkedIn", file: "linkedin.png" },
];

export default function ToolsMarquee() {
  return (
    <div className="w-full relative overflow-hidden py-16 border-y border-white/5 bg-black/40 mt-20">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
         <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 mb-10 text-center relative z-20">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Les Outils du Parcours</h2>
        <p className="text-gray-400 text-sm">Maîtrise technologique et accélération par l'IA</p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex w-full overflow-hidden">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
           className="flex items-center gap-8 md:gap-12 w-max"
        >
          {/* We duplicate the array to ensure a seamless infinite scroll loop */}
          {[...tools, ...tools, ...tools, ...tools].map((tool, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 px-6 md:px-8 py-3 md:py-4 rounded-full glassmorphism border border-white/10 hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group cursor-default"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0 shadow-lg">
                <Image 
                  src={`/logos/${tool.file}`} 
                  alt={tool.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <span className="font-heading font-bold text-white tracking-wide text-sm md:text-base group-hover:text-neon-blue transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
