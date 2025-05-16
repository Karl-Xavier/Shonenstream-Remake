/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'static1.animekai.to', 's4.anilist.co', 'cdn.myanimelist.net']
  }
};

export default nextConfig;
