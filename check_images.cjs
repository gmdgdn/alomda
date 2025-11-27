const https = require('https');

const urls = [
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2070&auto=format&fit=crop"
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${res.statusCode} - ${url}`);
    }).on('error', (e) => {
        console.error(`Error - ${url}: ${e.message}`);
    });
});
