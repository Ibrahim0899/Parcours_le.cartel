export interface Learner {
  id: string;
  name: string;
  role: string;
  tools: string[];
  image: string;
  youtubeId: string | null;
  pitch: string;
  portfolio: string | null;
}

export const learners: Learner[] = [
  { 
    id: "ibrahima-boye",
    name: "Ibrahima Boye", 
    role: "Analyste de Données", 
    tools: ["Python", "SQL", "ChatGPT"], 
    image: "/images/learner-portrait.png", 
    youtubeId: "F1R05jRzeXw",
    pitch: "Je m'appelle Ibrahima, j'ai 46 ans et après une première partie de carrière réussie en tant que développeur web, j'ai choisi aujourd'hui de me reconvertir dans un secteur d'avenir qui me passionne profondément : l'analyse de données.\n\nSérieux et rigoureux, j'aime analyser les problématiques complexes, écrire du code optimisé et automatiser les traitements pour rendre la donnée fiable et pleinement exploitable par les équipes. Mon ambition à court terme est d'accompagner les moyennes et grandes entreprises, notamment dans les secteurs de l'IT, des Télécoms ou de la Banque, à concevoir des infrastructures data robustes et à valoriser leurs informations de manière efficace.\n\nGrâce à mon passé de développeur technique, mon esprit analytique avéré et mon autonomie, j'apporte la garantie d'un collaborateur fiable, capable de structurer proprement les projets tout en demeurant à l'écoute de mon équipe.",
    portfolio: "https://iboub.github.io/IB_Portfolio-/#parcours"
  },
  { 
    id: "audrey-chauvet",
    name: "Audrey Chauvet", 
    role: "Créatrice de Contenu eSport", 
    tools: ["YouTube", "CapCut", "Gamma"], 
    image: "/images/learner-portrait.png", 
    youtubeId: "gUKErGxw7tQ",
    pitch: "Bonjour, je suis Audrey, j'ai 35 ans. Actuellement agent de sécurité et en situation de handicap, j'amorçe une nouvelle trajectoire pour faire carrière dans un univers qui me fascine depuis toujours : celui du Gaming.\n\nMon ambition profonde est non seulement de me professionnaliser dans la réflexion, la pratique et la création de contenus liés aux jeux vidéo, mais aussi de transmettre cette passion auprès des personnes en situation de handicap. Je souhaite prouver que nous y avons tous notre place. Très organisée, j'aime structurer mes entraînements et conceptualiser de nouveaux formats de contenu digitaux.\n\nDotée d'un tempérament minutieux, fiable et particulièrement ambitieuse, je suis déterminée à faire de ma singularité une véritable force pour votre écosystème numérique, tout en apportant mon expertise créative sur les plateformes actuelles.",
    portfolio: "https://audreychauvet90-ops.github.io/portfolio-audrey/"
  },
  { 
    id: "ewan-delgado",
    name: "Ewan Delgado", 
    role: "Chef de Projet Digital", 
    tools: ["Notion", "Gamma", "Outils IA"], 
    image: "/images/learner-portrait.png", 
    youtubeId: "d88GGxmhKlE",
    pitch: "Je suis Ewan, un profil autodidacte et déterminé. Je me projette dans 3 ans à la finalisation de mon Master en \"Objet Connecté\" (IoT) chez Epitech. Passionné par l'innovation matérielle et logicielle, je me vois également évoluer avec mon propre atelier créatif, entouré de mes imprimantes 3D et dédié à la concrétisation de mes idées les plus complexes.\n\nMes principes directeurs se résument en quelques mots forts : le sérieux, l'assiduité, et une grande curiosité intellectuelle. J'aborde chaque nouvelle mission avec un prisme perfectionniste qui me pousse à me dépasser en continu. De nature très autonome, j'apprends et je m'adapte rapidement.\n\nEn m'intégrant à votre équipe, je prends l'engagement de pousser chaque projet à son maximum de potentiel avec une cohésion d'équipe sans faille et une exigence de qualité systématique pour toutes les tâches qui me sont confiées.",
    portfolio: "https://eesnd-portfolio.vercel.app/"
  },
  { 
    id: "liliane-le-sidaner",
    name: "Liliane Le Sidaner", 
    role: "Customer Success Manager", 
    tools: ["CRM", "Next.js", "Outils Expérience Client"], 
    image: "/images/learner-portrait.png", 
    youtubeId: "RGHi-Hq7dXM",
    pitch: "Bonjour à toutes et à tous, je suis Liliane. Profil indéniablement multipotentiel, je suis actuellement en pleine transition vers les métiers du Customer Success Management. Après avoir exercé plus de 10 ans dans le support marketing et commercial à l'international, j'ai aujourd'hui le désir de reconnecter mes process avec les réalités directes du terrain et des besoins clients.\n\nProfondément tournée vers l'action et animée par un fort besoin de transmission, j'aborde mon rôle avec une vision client 360°. J'aime analyser des situations complexes et mettre en œuvre des stratégies efficaces et mesurables, tout en m'aidant d'outils collaboratifs (CRMs, solutions digitales) afin d'optimiser et d'enchanter au maximum le parcours client.\n\nD'ici 3 ans, j'aspire à devenir consultante auprès de structures d'envergure. Très diplomate et pragmatique, mes valeurs de transparence et de bienveillance garantissent des interactions de qualité supérieure pour vos projets.",
    portfolio: "https://Liliane1131-sys.github.io/site-liliane/"
  },
  { 
    id: "sabrina-lezin",
    name: "Sabrina Lezin", 
    role: "Monteuse Vidéo", 
    tools: ["Premiere", "After Effects", "Réseaux Sociaux"], 
    image: "/images/learner-portrait.png", 
    youtubeId: "cFZKk8hF9TE",
    pitch: "Je m'appelle Sabrina et je me spécialise dans la post-production, le montage vidéo et la création de contenus percutants. Formée intensivement aux outils digitaux performants, je sais concevoir, éditer et rythmer des vidéos afin d'incarner avec justesse la voix et l'image d'un projet.\n\nPassionnée par le storytelling audiovisuel et l'évolution constante des formats digitaux, j'accorde une attention particulière au rythme de mes montages. Ma capacité à m'immerger dans vos objectifs de communication me permet d'apporter cette touche moderne indispensable pour engager vos audiences, que ce soit pour des formats courts (réseaux sociaux) ou narratifs.",
    portfolio: null
  },
  { 
    id: "simone-mivegue",
    name: "Simone Mivegue", 
    role: "Consultante Innovation & R&D", 
    tools: ["Analyse Financière", "Veille Tech", "Veille Stratégique"], 
    image: "/images/learner-portrait.png", 
    youtubeId: null,
    pitch: "Bonjour, je suis Simone. Après 20 ans d'une riche carrière dans le conseil bancaire qui a forgé mon esprit analytique, je mène aujourd'hui une reconversion audacieuse à la croisée de l'IT et du sport féminin. Le sport est un terrain d'avenir, porteur de puissants enjeux économiques et sociétaux sur lesquels je suis profondément engagée.\n\nJe mets à profit mes méthodes financières et ma lucidité (neutralité, analyse des signaux faibles) afin d'évaluer, de proposer et d'accompagner des solutions technologiques dédiées aux structures sportives avec un recul stratégique fort. À l'horizon de 3 ans, mon ambition est clairement tracée : devenir Consultante experte en Recherche & Développement de solutions innovantes dédiées tant au grand public qu'aux sportives de haut niveau.\n\nMon intégration au sein d'une startup Sport-Tech vous apporterait une capacité d'intelligence économique immédiate et une proactivité à toute épreuve.",
    portfolio: null
  }
];
