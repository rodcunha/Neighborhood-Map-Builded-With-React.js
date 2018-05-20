//make sure that Service Workers are supported.
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js', {scope: './about'})
        .then(function (registration) {
            console.log(registration);
        })
        .catch(function (e) {
            console.error(e);
        })
} else {
    console.log('Service Worker is not supported in this browser.');
}