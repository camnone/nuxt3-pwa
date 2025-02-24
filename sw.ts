/// <reference lib="WebWorker" />
/// <reference types="vite/client" />
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);
declare let self: ServiceWorkerGlobalScope

const CACHE_NAME = "SW";
const toCache: any = [];


self.addEventListener("message", (event: any) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("install", function (event: any) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(toCache);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("fetch", function (event: any) {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request);
            });
        })
    );
});

self.addEventListener("activate", function (event: any) {
    event.waitUntil(
        caches
            .keys()
            .then((keyList) => {
                return Promise.all(
                    keyList.map((key) => {
                        if (key !== CACHE_NAME) {
                            console.log("[ServiceWorker] Hapus cache lama", key);
                            return caches.delete(key);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});
