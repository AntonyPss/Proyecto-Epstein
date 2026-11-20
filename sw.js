const CACHE = "expediente-epstein-v7";
const ASSETS = [
    "./",
    "index.html",
    "styles.css",
    "script.js",
    "manifest.webmanifest",
    "assets/images/jeffrey-esptein.jpg",
    "assets/images/jeffrey-esptein-end.png",
    "assets/images/case-nyc.jpg",
    "assets/images/case-palmbeach.jpg",
    "assets/images/case-island.jpg",
    "assets/images/case-desert.jpg",
    "assets/images/case-london.jpg",
    "assets/images/case-cell.jpg",
    "assets/images/case-night.jpg",
    "assets/images/documents.jpg",
    "assets/images/island-escape.jpg",
    "assets/images/island-haze.jpg",
    "assets/images/jeffrey-alt.png",
    "assets/images/jeffrey-stare.png",
    "assets/images/jeffrey-pointing.png",
    "assets/images/jeffrey-sunrise.png",
    "assets/images/jeffrey-evil.png",
    "assets/sounds/horror-ambient.wav",
    "assets/sounds/rising-tension.wav",
    "assets/sounds/screamer-end.wav",
    "assets/sounds/sfx-boom.wav",
    "assets/sounds/sfx-click.wav",
    "assets/sounds/sfx-correct.wav",
    "assets/sounds/sfx-page.wav",
    "assets/sounds/sfx-win.wav",
    "assets/sounds/sfx-wrong.wav",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()),
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))),
            )
            .then(() => self.clients.claim()),
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;
    event.respondWith(
        caches.match(event.request).then(
            (cached) =>
                cached ||
                fetch(event.request)
                    .then((response) => {
                        if (response.ok && new URL(event.request.url).origin === location.origin) {
                            const copy = response.clone();
                            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
                        }
                        return response;
                    })
                    .catch(() => caches.match("index.html")),
        ),
    );
});
