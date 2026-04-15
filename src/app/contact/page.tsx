"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">Nous contacter</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Intéressé par l'un de nos talents ? Contactez-nous pour organiser une rencontre ou recevoir des dossiers complets.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-6"
        >
          <div className="p-6 rounded-2xl glassmorphism border border-white/5 bg-gradient-to-br from-neon-pink/10 to-transparent">
            <Briefcase className="w-8 h-8 text-neon-pink mb-4" />
            <h3 className="text-xl font-bold font-heading mb-2">Recruter nos talents</h3>
            <p className="text-sm text-gray-400 mb-4">
              Ils sont disponibles pour des stages, alternances ou contrats professionnels.
            </p>
            <button className="text-neon-pink font-semibold text-sm flex items-center hover:text-white transition-colors">
              Voir la brochure entreprise <ChevronRight size={16} />
            </button>
          </div>

          <div className="p-6 rounded-2xl glassmorphism border border-white/5">
            <Mail className="w-8 h-8 text-neon-blue mb-4" />
            <h3 className="text-xl font-bold font-heading mb-2">Nous contacter</h3>
            <div className="space-y-3">
              <a href="mailto:contact.lecartel94@gmail.com" className="block text-sm text-gray-400 hover:text-white transition-colors">
                contact.lecartel94@gmail.com
              </a>
              <a href="tel:0695540234" className="block text-sm text-gray-400 hover:text-white transition-colors">
                06 95 54 02 34
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 p-8 rounded-2xl glassmorphism border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-[50px] z-0"></div>
          <form className="relative z-10 space-y-6" action="mailto:contact.lecartel94@gmail.com" method="post" encType="text/plain">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nom / Prénom</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Entreprise</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Tech Solutions"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email professionnel</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="jean@techsolutions.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="Je suis intéressé par le profil de..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow duration-300"
            >
              Envoyer la demande
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
