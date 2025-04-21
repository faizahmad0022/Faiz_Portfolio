/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "devprofiles.thundertechsol.com",
      "53.fs1.hubspotusercontent-na1.net",
      "www.upwork.com",
      'hackernoon.imgix.net',
    ],
  },
  
  output: "standalone",
  reactStrictMode: false,
};

  


export default nextConfig;
