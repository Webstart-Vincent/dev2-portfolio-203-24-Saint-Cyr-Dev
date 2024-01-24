/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig



const path = require('path');

   module.exports = {
     // ...autres configurations...
     webpack: (config) => {
       config.resolve.alias['@'] = path.resolve(__dirname);
       return config;
     },
   };