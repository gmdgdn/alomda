const https = require('https');

const urls = [
    "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error - ${url}: ${e.message}`);
    });
});
