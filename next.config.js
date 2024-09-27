/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

// await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'unsplash.com',
      'cdn.discordapp.com',
      'wepik.com'
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
}

export default config
