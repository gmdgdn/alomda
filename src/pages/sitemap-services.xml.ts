import { SERVICE_TEMPLATES } from '../data/service-content';
import { generateSitemapXml } from '../utils/sitemap-utils';

export async function GET({ site }) {
    const baseUrl = site.href.replace(/\/$/, '');
    const today = new Date().toISOString();

    const serviceUrls = Object.values(SERVICE_TEMPLATES).map((s) => ({
        loc: `${baseUrl}/services/${s.slug}`,
        lastmod: today,
        changefreq: 'daily',
        priority: 1.0,
    }));

    return new Response(generateSitemapXml(serviceUrls), {
        headers: { 'Content-Type': 'application/xml' },
    });
}
