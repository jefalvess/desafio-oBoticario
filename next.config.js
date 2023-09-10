const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['oboticario.com.co', 'boticario-desafio.onrender.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
});
