const cacheAssets = [
  "index.html",
  "style.css",
  "script.js",
  "html5-qrcode.min.js/html5-qrcode-master/minified/html5-qrcode.min.js",
  "pdf",
  "sogliq.svg",
];

const CACHE_NAME = "offline-v2"; // Versiyani o'zgartirdik

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["./", "index.html"]); // Eng kamida indexni saqlaymiz
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, resClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
