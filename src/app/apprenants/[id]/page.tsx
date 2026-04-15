import { learners } from "@/data/learners";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, PlayCircle, ExternalLink } from "lucide-react";

// Pre-render pages at build time
export function generateStaticParams() {
  return learners.map((learner) => ({
    id: learner.id,
  }));
}

export default async function LearnerProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const learner = learners.find((l) => l.id === resolvedParams.id);

  if (!learner) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <Link href="/apprenants" className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors mb-12">
        <ChevronLeft size={20} /> Retour aux profils
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sidebar / Photo Card */}
        <div className="lg:col-span-1">
          <div className="rounded-3xl overflow-hidden glassmorphism border border-white/10 sticky top-32 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-[4/5] w-full bg-dark-bg">
              {learner.video ? (
                <video 
                  src={learner.video} 
                  className="w-full h-full object-cover opacity-80"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              ) : (
                <Image 
                  src={learner.image} 
                  alt={learner.name} 
                  fill 
                  className="object-cover opacity-80"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="p-8 bg-dark-bg/95 relative z-10 -mt-20 backdrop-blur-md">
              <h1 className="text-3xl font-heading font-black text-white mb-2">{learner.name}</h1>
              <p className="text-neon-blue font-semibold mb-6">{learner.role}</p>
              
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Outils maîtrisés</p>
                <div className="flex flex-wrap gap-2">
                  {learner.tools.map((tool, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 font-medium tracking-wide">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content / Bio */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="glassmorphism p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink/5 blur-[100px] z-0 pointer-events-none"></div>
            <h2 className="text-2xl font-heading font-bold mb-8 relative z-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-neon-pink rounded-full shadow-[0_0_10px_rgba(255,0,60,0.8)]"></span> 
              Mon Parcours
            </h2>
            <div className="text-gray-300 leading-relaxed text-[1.05rem] space-y-6 relative z-10 whitespace-pre-wrap">
              {learner.pitch}
            </div>

            {learner.portfolio && (
              <div className="mt-8 relative z-10">
                <a 
                  href={learner.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-neon-blue/40 text-neon-blue font-medium hover:bg-neon-blue hover:text-dark-bg transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  <ExternalLink size={18} /> Pour en savoir plus sur l'apprenant (Portfolio)
                </a>
              </div>
            )}
          </section>

          <section className="pt-4">
            <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-neon-blue rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span> 
              CV Vidéo
            </h2>
            
            <div className="rounded-3xl overflow-hidden glassmorphism border border-white/10 relative group aspect-video shadow-2xl">
              {learner.video ? (
                <video 
                  src={learner.video} 
                  className="w-full h-full object-contain bg-black"
                  controls
                  preload="metadata"
                />
              ) : (
                <div className="w-full h-full bg-dark-bg flex flex-col items-center justify-center border border-white/5">
                  <PlayCircle size={64} className="text-gray-600 mb-4" />
                  <p className="text-gray-400 font-medium">Vidéo en cours de production...</p>
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
