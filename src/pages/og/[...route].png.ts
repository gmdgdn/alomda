import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as satoriHtml } from 'satori-html';
import { DISTRICTS } from '../../data/districts';
import { SERVICE_TEMPLATES } from '../../data/service-content';
import type { APIRoute } from 'astro';

// 1. Generate Paths for all Districts and Services
export async function getStaticPaths() {
  const districtPaths = DISTRICTS.map((d) => ({
    params: { route: `${d.region.toLowerCase()}/${d.slug}` },
    props: { title: `شراء اثاث في ${d.nameAr}`, subtitle: 'نصلك خلال 60 دقيقة - دفع كاش' },
  }));

  const servicePaths = Object.values(SERVICE_TEMPLATES).map((s) => ({
    params: { route: `services/${s.slug}` },
    props: { title: s.titleAr, subtitle: 'أفضل الأسعار في الرياض' },
  }));

  return [...districtPaths, ...servicePaths];
}

// 2. Generate the Image
export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle } = props as { title: string; subtitle: string };

  // Load Font (Tajawal - Essential for Arabic)
  const fontFile = await fetch('https://github.com/google/fonts/raw/main/ofl/tajawal/Tajawal-Bold.ttf');
  const fontData = await fontFile.arrayBuffer();

  const markup = satoriHtml(`
    <div style="display: flex; height: 100%; width: 100%; background-color: #022c22; color: white; justify-content: center; align-items: center; position: relative;">
      <div style="display: flex; border: 4px solid #f59e0b; padding: 40px; border-radius: 20px; flex-direction: column; align-items: center; background: rgba(0,0,0,0.3); width: 90%; height: 80%; position: relative;">
        <div style="display: flex; font-size: 30px; color: #f59e0b; margin-bottom: 20px;">شركة العمدة</div>
        <div style="display: flex; font-size: 70px; font-weight: bold; text-align: center; direction: rtl; line-height: 1.1;">${title}</div>
        <div style="display: flex; font-size: 35px; color: #cbd5e1; margin-top: 20px; direction: rtl;">${subtitle}</div>
        <div style="display: flex; position: absolute; bottom: 40px; font-size: 24px; color: #10b981;">alomda-sa.com</div>
      </div>
    </div>
  `);

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [{ name: 'Tajawal', data: fontData, style: 'normal' }],
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
