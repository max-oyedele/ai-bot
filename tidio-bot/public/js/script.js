function reloadTidio() {

    var existingScript = document.getElementById('tidio-script');
    if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
    }

    var newScript = document.createElement('script');
    newScript.src = '//code.tidio.co/usv3ombmq5dbeqtznqrt3scesynkgiav.js';
    newScript.async = true;
    newScript.id = 'tidio-script';
    document.head.appendChild(newScript);
}

window.addEventListener('load', function () {
    reloadTidio();
});