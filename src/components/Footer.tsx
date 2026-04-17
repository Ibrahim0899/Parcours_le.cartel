import Link from "next/link";
import { Gamepad2, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40 backdrop-blur-sm pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4 inline-flex">
              <Gamepad2 className="w-7 h-7 text-neon-purple" />
              <span className="font-heading font-bold text-lg tracking-wider">
                LE C.A.R.T.E.L<span className="text-neon-blue">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-6">
              De joueurs de jeux vidéo à créateurs du numérique. Un parcours intensif transformant la passion en compétences concrètes pour le monde professionnel.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact.lecartel94@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-neon-blue transition-colors" title="contact.lecartel94@gmail.com">
                <Mail size={20} />
              </a>
              <a href="tel:0695540234" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-neon-blue transition-colors" title="06 95 54 02 34">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'CVthèque', href: '/cvtheque' },
                { name: 'Outils utilisés', href: '/outils' },
                { name: 'Pitch', href: '/pitch' },
                { name: 'Projet collectif', href: '/projet-collectif' },
                { name: 'Projet perso', href: '/projet-perso' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📧 contact.lecartel94@gmail.com</p>
              <p>📱 06 95 54 02 34</p>
              <p className="pt-2 text-gray-500">
                Parcours d&apos;Inclusion via le E-sport et les Métiers du Numérique — Session 2
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Le C.A.R.T.E.L. Tous droits réservés.
          </p>
        </div>

        <div className="text-center w-full pb-2">
          <p className="text-gray-500/80 text-[11px] font-mono tracking-[0.15em] uppercase">
            Website Powered by <span className="text-white/60">The_Ibrahim</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
