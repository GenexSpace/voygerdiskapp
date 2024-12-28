const CACHE_NAME = "voyager-app-cache-v1";
const URLS_TO_CACHE = [
    "//file/baguetteBox.min.css",
    "//file/baguetteBox.min.js",
    "//file/bootstrap.min.css",
    "//file/bootstrap.min.js",
    "//file/cover-diagram-large.jpg",
    "//file/disk.png",
    "//file/instruments-3.jpg",
    "//file/mounting-the-golden-record-30269499363-o.jpg",
    "//file/screenshot-2024-10-24-at-6-32.png",
    "//file/the-golden-record-30269492703-o.jpg",
    "//file/The_Sounds_of_Earth_-_GPN-2000-001976.jpg",
    "//file/voyager-banner-blue.jpg",
    "//file/voyager-gold-record-display-10-5-1977-30214218763-o.jpg",
    "//file/voyager-gold-record-front.jpg",
    "//file/voyager-golden-record-cover.jpg",
    "//file/voyager-record-diagram.jpeg",
    "//file/voyager-record-location.jpeg",
    "//file/Voyager_spacecraft_model.png",
    "//gallery/airplane-in-flight-30634172743-o.webp",
    "//gallery/astronaut-in-space-30620956564-o.webp",
    "//gallery/calibration-circle-31325346536-o.webp",
    "//gallery/chemical-definitions-31218371762-o.webp",
    "//gallery/children-with-globe-30541853554-o.webp",
    "//gallery/demonstration-of-licking-eating-and-drinking-30542224004-o.webp",
    "//gallery/diagram-of-conception-31218656712-o.webp",
    "//gallery/diagram-of-continental-drift-31247808951-o.webp",
    "//gallery/diagram-of-family-ages-31326608936-o.webp",
    "//gallery/diagram-of-male-and-female-31326553496-o.webp",
    "//gallery/diagram-of-vertebrate-evolution-30993842550-o.webp",
    "//gallery/dna-structure-31362211895-o.webp",
    "//gallery/dna-structure-magnified-light-hit-31362224015-o.webp",
    "//gallery/earth-31326146966-o.webp",
    "//gallery/egypt-red-sea-sinal-peninsula-and-the-nile-30993198280-o.webp",
    "//gallery/fetus-diagram-30540929914-o.webp",
    "//gallery/fishing-boat-with-nets-30542208064-o.webp",
    "//gallery/house-africa-30994933500-o.webp",
    "//gallery/house-construction-african-30542255034-o.webp",
    "//gallery/jupiter-31325748356-o.webp",
    "//gallery/man-from-guatemala-30541182514-o.webp",
    "//gallery/mars-30992814480-o.webp",
    "//gallery/mathematical-definitions-30539954574-o.webp",
    "//gallery/mercury-31246953391-o.webp",
    "//gallery/modern-highway-30634010913-o.webp",
    "//gallery/modern-house-cloudcroft-new-mexico-30556337973-o.webp",
    "//gallery/nursing-mother-31362634275-o.webp",
    "//gallery/page-of-book-newton-system-of-the-world-31297500982-o.webp",
    "//gallery/pale-blue-dot-revised.webp",
    "//gallery/physical-unit-definitions-30554003853-o.webp",
    "//gallery/pia00032.webp",
    "//gallery/pia00335.webp",
    "//gallery/pia01384.webp",
    "//gallery/pia01394.webp",
    "//gallery/PIA01492-1.jpg",
    "//gallery/PIA01493~orig.jpg",
    "//gallery/pia01529.webp",
    "//gallery/pia01531.webp",
    "//gallery/pia01979.webp",
    "//gallery/PIA01996~orig.jpg",
    "//gallery/PIA18182~orig.jpg",
    "//gallery/pia21476.webp",
    "//gallery/pia21727.webp",
    "//gallery/pia21731.webp",
    "//gallery/pia21739.webp",
    "//gallery/radio-telescope-arecibo-31442688195-o.webp",
    "//gallery/schoolroom-30994523250-o.webp",
    "//gallery/sketch-of-bushmen-30541167404-o.webp",
    "//gallery/solar-location-map-30992503150-o.webp",
    "//gallery/solar-spectrum-30992778240-o.webp",
    "//gallery/solar-system-parameters-30554017073-o.webp",
    "//gallery/solar-system-parameters-30992729550-o.webp",
    "//gallery/spacecraft-profile.webp",
    "//gallery/sprinters-valeri-borzov-of-the-ussr-in-lead-history-of-the-olympics-31363259165-o.webp",
    "//gallery/street-scene-31071643420-o.webp",
    "//gallery/structure-of-earth-31247834881-o.webp",
    "//gallery/supermarket-30555896943-o.webp",
    "//gallery/the-golden-record-30269492703-o.webp",
    "//gallery/titan-centaur-launch-31297529782-o.webp",
    "//gallery/un-building-day-30542352584-o.webp",
    "//gallery/un-building-night-30556368033-o.webp",
    "//gallery/violin-with-music-score-cavatina-31072637180-o.webp",
    "//gallery/voyager-gold-record-display.webp",
    "//gallery/voyager-golden-record-etching-7-28-77-30548567140-o.webp",
    "//gallery/voyager-golden-record-etching-7-28-77-30849543195-o.webp",
    "//gallery/voyager-golden-record-gold-plating-8-23-77-30812980156-o.webp",
    "//gallery/voyager-golden-record-lamination-bonding-8-31-1977-30812615156-o.webp",
    "//gallery/voyager-record-cover-446eb9.webp",
    "//gallery/voyager-recording-session-6-29-77-30769379012-o.webp",
    "//gallery/voyager-recording-session-6-29-77-30796968361-o.webp",
    "//gallery/voyager-recording-session-6-29-77.webp",
    "//gallery/voyager-rush-hour.webp",
    "//gallery/woman-with-microscope-31071614760-o.webp",
    "//gallery/x-ray-of-hand-31220229722-o.webp",
    "//gallery.html",
    "//goldenrecord.html",
    "//icon-192x192.png",
    "//icon-512x512.png",
    "//index.html",
    "//manifest.json",
    "//music/golden-record-birds-hyena-elephant.mp3",
    "//music/golden-record-chimpanzee.mp3",
    "//music/golden-record-crickets-frogs.mp3",
    "//music/golden-record-footsteps-heartbeat-laughter.mp3",
    "//music/golden-record-herding-sheep-blacksmith-sawing.mp3",
    "//music/golden-record-horse-and-cart.mp3",
    "//music/golden-record-kiss-mother-and-child.mp3",
    "//music/golden-record-life-signs-pulsar.mp3",
    "//music/golden-record-morse-code-ships.mp3",
    "//music/golden-record-mud-pots.mp3",
    "//music/golden-record-music-of-the-spheres.mp3",
    "//music/golden-record-tame-dog.mp3",
    "//music/golden-record-the-first-tools.mp3",
    "//music/golden-record-tractor-bus-auto.mp3",
    "//music/golden-record-tractor-riveter.mp3",
    "//music/golden-record-train.mp3",
    "//music/golden-record-wild-dog.mp3",
    "//music/golden-record-wind-rain-surf.mp3",
    "//music.html",
    "//readme.md",
    "//script.js",
    "//service-worker.js",
    "//spacecraft.html",
    "//styles.css",
    "//where.html"
];

// Install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
    console.log("Service Worker installed: voyager-app-cache-v1");
});

// Fetch event
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activate event
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log("Deleting old cache: " + cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            clients.matchAll().then(clients => {
                clients.forEach(client => client.postMessage({ action: "updateComplete" }));
            });
        })
    );
    console.log("Service Worker activated: voyager-app-cache-v1");
});