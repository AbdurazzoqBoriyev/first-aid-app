const cacheAssets = [
  "index.html",
  "style.css",
  "script.js",
  "html5-qrcode.min.js/html5-qrcode-master/minified/html5-qrcode.min.js",
  "pdf",
  "sogliq.svg",
];

const cacheName = "v1";

// O'rnatish bosqichi
self.addEventListener("install", (e) => {
  console.log("Service Worker: O‘rnatildi");
});

// Aktivlashtirish (eski keshni o'chirish)
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
});

// Asosiy qism: Internetdan olish yoki keshdan berish
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Internet bor: faylni keshga nusxalaymiz
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request)), // Internet yo'q: keshdan olamiz
  );
});
