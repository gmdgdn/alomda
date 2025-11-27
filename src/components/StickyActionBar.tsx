import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/site-config';

export default function StickyActionBar() {
    return (
        <div
            className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-fade-up"
        >
            <div className="glass-card rounded-2xl p-2 flex items-center justify-between gap-3 shadow-2xl border border-white/40">
                {/* Call Button */}
                <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    aria-label="اتصل بنا الآن"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-brand-primary/20 active:scale-95 transition-transform"
                >
                    <Phone className="w-5 h-5" />
                    <span>اتصل الآن</span>
                </a>

                {/* WhatsApp Button */}
                <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="تواصل معنا عبر واتساب"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-emerald-600/20 active:scale-95 transition-transform relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full"></div>
                    <MessageCircle className="w-5 h-5" />
                    <span>واتساب</span>
                </a>
            </div>
        </div>
    );
}
