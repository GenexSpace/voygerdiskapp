<?php
header("Content-Type: application/javascript");

// Define the directory containing the files
$directory = __DIR__ . '/';
$baseURL = '/'; // Adjust base URL if needed

// Function to recursively get all files in a directory
function getFiles($dir, $baseURL) {
    $files = [];
    $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir));
    foreach ($iterator as $file) {
        if ($file->isFile()) {
            $relativePath = str_replace($dir, '', $file->getPathname());
            $relativePath = str_replace('\\', '/', $relativePath); // Normalize for Windows
            $files[] = $baseURL . $relativePath;
        }
    }
    return $files;
}

// Get all files from the directory
$files = getFiles($directory, $baseURL);

// Define cache name and version
$cacheName = "voyager-app-cache-v1";

?>

const CACHE_NAME = "<?php echo $cacheName; ?>";
const URLS_TO_CACHE = <?php echo json_encode($files); ?>;

// Install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
    console.log("Service Worker installed: <?php echo $cacheName; ?>");
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
    console.log("Service Worker activated: <?php echo $cacheName; ?>");
});
