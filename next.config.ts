import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root. A stray package-lock.json in the user home folder
  // otherwise makes Next infer C:\Users\moeke as the root, which 404s every route.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
