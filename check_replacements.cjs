const https = require('https');

const urls = [
    // Commercial Kitchen
    "https://images.unsplash.com/photo-1587578724799-167897c8d17f?q=80&w=2070&auto=format&fit=crop",
    // Modern Office
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    // Luxury Living Room (Villa)
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
    // Modern Apartment (General)
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop"
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error - ${url}: ${e.message}`);
    });
});
