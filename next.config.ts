import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root so stray lockfiles elsewhere on the machine
    // don't confuse root inference.
    root: __dirname,
  },
};

export default nextConfig;
