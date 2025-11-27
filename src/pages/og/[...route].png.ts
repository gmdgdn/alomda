import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as satoriHtml } from 'satori-html';
import { DISTRICTS } from '../../data/districts';
import { SERVICE_TEMPLATES } from '../../data/service-content';
import type { APIRoute } from 'astro';

// 1. Generate Static Paths (Must cover EVERY route)
export async function getStaticPaths() {
  const districtPaths = DISTRICTS.map((d) => ({
    params: { route: `${d.region.toLowerCase()}/${d.slug}` },
    props: { title: `شراء اثاث في ${d.nameAr}`, subtitle: 'نصلك خلال 60 دقيقة - دفع كاش' },
  }));

  const servicePaths = Object.values(SERVICE_TEMPLATES).map((s) => ({
    params: { route: `services/${s.slug}` },
    props: { title: s.titleAr, subtitle: 'أفضل الأسعار في الرياض' },
  }));

  // Add Homepage
  const homePath = {
    params: { route: 'index' },
    props: { title: 'شركة العمدة للاثاث', subtitle: 'نشتري جميع الاثاث المستعمل بالرياض' }
  };

  return [homePath, ...districtPaths, ...servicePaths];
}

// 2. The Image Generation Endpoint
export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle } = props as { title: string; subtitle: string };

  // ROBUST FONT LOADING: Use a public CDN with CORS support
  const fontUrl = 'https://cdn.jsdelivr.net/fontsource/fonts/tajawal@latest/arabic-700-normal.ttf';
  const fontFile = await fetch(fontUrl);
  const fontData = await fontFile.arrayBuffer();

  const markup = satoriHtml(`
    <div style="display: flex; height: 100%; width: 100%; background-color: #022c22; color: white; justify-content: center; align-items: center; font-family: 'Tajawal', sans-serif;">
      <div style="display: flex; border: 4px solid #f59e0b; padding: 40px; border-radius: 20px; flex-direction: column; align-items: center; justify-content: center; background: rgba(0,0,0,0.4); width: 90%; height: 80%; position: relative;">
        <div style="display: flex; font-size: 30px; color: #f59e0b; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px;">EL-OMDA</div>
        <div style="display: flex; font-size: 70px; font-weight: 900; text-align: center; direction: rtl; line-height: 1.1; margin-bottom: 20px;">${title}</div>
        <div style="display: flex; font-size: 35px; color: #e2e8f0; text-align: center; direction: rtl;">${subtitle}</div>
        <div style="display: flex; position: absolute; bottom: 30px; font-size: 24px; color: #10b981; font-weight: bold;">elomda-sa.com</div>
      </div>
    </div>
  `);

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [{ name: 'Tajawal', data: fontData, style: 'normal', weight: 700 }],
  });

  const resvg = new Resvg(svg);
  const pngData = resvg.render().asPng();

  return new Response(pngData, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    },
  });
};
