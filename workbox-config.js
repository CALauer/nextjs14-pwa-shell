module.exports = {
  globDirectory: "public/",
  globPatterns: [
    "**/*.{html,json,js,css,svg,png,jpg,ico}", // Add any file types you need to cache
  ],
  swDest: "public/sw.js", // This will place your service worker in the public directory
  modifyURLPrefix: {
    "": "/", // Ensure the paths in the precache manifest are relative to the domain root
  },
  // Optionally, add runtime caching for dynamic routes or assets served outside the public directory:
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
  skipWaiting: true,
  clientsClaim: true,
};
