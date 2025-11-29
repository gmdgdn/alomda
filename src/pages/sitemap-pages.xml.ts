import { getCollection } from 'astro:content';
import { generateSitemapXml } from '../utils/sitemap-utils';

export async function GET({ site }) {
    const baseUrl = site.href.replace(/\/$/, '');
    const today = new Date().toISOString();

    // 1. Static Pages
    const staticPages = [
        { loc: `${baseUrl}/`, priority: 1.0 },
        { loc: `${baseUrl}/about`, priority: 0.7 },
        { loc: `${baseUrl}/contact`, priority: 0.8 },
        { loc: `${baseUrl}/blog`, priority: 0.7 },
    ];

    const staticUrls = staticPages.map(p => ({
        ...p,
        lastmod: today,
        changefreq: 'monthly'
    }));

    // 2. Blog Posts
    const posts = await getCollection('blog');
    const blogUrls = posts.map((post) => ({
        loc: `${baseUrl}/blog/${post.slug}`,
        lastmod: post.data.pubDate ? new Date(post.data.pubDate).toISOString() : today,
        changefreq: 'monthly',
        priority: 0.6,
    }));

    return new Response(generateSitemapXml([...staticUrls, ...blogUrls]), {
        headers: { 'Content-Type': 'application/xml' },
    });
}
