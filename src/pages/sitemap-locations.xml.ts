import { RIYADH_DISTRICTS } from '../data/districts';
import { generateSitemapXml } from '../utils/sitemap-utils';

export async function GET({ site }) {
    const baseUrl = site.href.replace(/\/$/, '');
    const today = new Date().toISOString();

    // 1. District URLs
    const districtUrls = RIYADH_DISTRICTS.map((d) => {
        // Normalize region to match page logic (e.g., 'North' -> 'north-riyadh')
        let regionSlug = d.region.toLowerCase();
        if (!regionSlug.includes('riyadh')) {
            regionSlug = `${regionSlug}-riyadh`;
        }

        return {
            loc: `${baseUrl}/riyadh/${regionSlug}/${d.slug}`,
            lastmod: today,
            changefreq: 'weekly',
            priority: 0.8,
        };
    });

    // 2. Unique Region URLs
    const uniqueRegions = [...new Set(RIYADH_DISTRICTS.map(d => d.region))];
    const regionUrls = uniqueRegions.map((r) => {
        let regionSlug = r.toLowerCase();
        if (!regionSlug.includes('riyadh')) {
            regionSlug = `${regionSlug}-riyadh`;
        }

        return {
            loc: `${baseUrl}/riyadh/${regionSlug}`,
            lastmod: today,
            changefreq: 'weekly',
            priority: 0.9,
        };
    });

    // 3. Main Riyadh Page
    const riyadhUrl = {
        loc: `${baseUrl}/riyadh`,
        lastmod: today,
        changefreq: 'daily',
        priority: 0.9,
    };

    return new Response(generateSitemapXml([riyadhUrl, ...regionUrls, ...districtUrls]), {
        headers: { 'Content-Type': 'application/xml' },
    });
}
