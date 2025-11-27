const https = require('https');

const urls = [
    // Pricing Reality (Handshake/Deal)
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop", // Close up handshake
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop", // Previous one (for comparison)

    // Restaurant Equipment (Commercial Kitchen)
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop", // Modern Kitchen (Alternative)
    "https://images.unsplash.com/photo-1587578724799-167897c8d17f?q=80&w=2070&auto=format&fit=crop" // Another option
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error - ${url}: ${e.message}`);
    });
});
