let cacheName = "v1.0";

let cacheAssets = [
    //HTML
    'index.html',
    'acerca.html',
    'mision.html',
    'vision.html',
    'contacto.html',
    //JS
    '/js/menu.js',
    //CSS
    '/css/style.css',
    //IMG
    '/img/icon64.png',
    '/img/icon128.png',
    '/img/header.png',
    '/img/mision.png',
    '/img/vision.png',
    '/img/empresa.png',
    '/img/facebook.png',
    '/img/github.png',
    '/img/instagram.png',
    '/img/linkedin.png',
    '/img/infoimg1.jpg',
    '/img/infoimg2.jpg',
    '/img/infoimg3.jpg',
    '/img/infoimg4.jpg',
    '/img/menu.png',
    '/img/cerrar.png'
]

self.addEventListener('install', e => {
    console.log('Service Worker Instalado');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker Cacheados');
                cache.addAll(cacheAssets);
            })
            .then(()=>self.skipWaiting())
    )
})

self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
})

self.addEventListener('fetch', e => {
    console.log('SErvice Worker Encontrado');
    e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
})