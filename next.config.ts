import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Configuration pour le déploiement sur GitHub Pages avec le nom du dépôt
  basePath: '/Parcours_le.cartel',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
