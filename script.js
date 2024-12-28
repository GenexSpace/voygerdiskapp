if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker registered"))
        .catch((error) => console.error("Service Worker registration failed:", error));
}

// Check storage usage and display it
if (navigator.storage && navigator.storage.estimate) {
    navigator.storage.estimate().then(({ usage, quota }) => {
        const usageMB = (usage / 1024 / 1024).toFixed(2);
        const quotaMB = (quota / 1024 / 1024).toFixed(2);

        const storageInfo = document.getElementById("storage-usage");
        storageInfo.textContent = `Used: ${usageMB} MB of ${quotaMB} MB (${((usage / quota) * 100).toFixed(2)}%)`;
    }).catch((error) => {
        console.error("Failed to retrieve storage information:", error);
        document.getElementById("storage-usage").textContent = "Unable to retrieve storage information.";
    });
} else {
    document.getElementById("storage-usage").textContent = "Storage API not supported in this browser.";
}
