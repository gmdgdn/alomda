const https = require('https');

const urls = [
    // Commercial Kitchen (Alternative)
    "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop",
    // Pricing Reality (Handshake/Trust)
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error - ${url}: ${e.message}`);
    });
});
