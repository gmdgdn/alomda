import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/site-config';

export default function StickyActionBar() {
    return (
        <div
            className="fixed bottom-6 left-0 right-0 z-50 md:hidden flex justify-between px-6 pointer-events-none"
        >
            {/* Call Button (Left) */}
            <a
                href={`tel:${SITE_CONFIG.phone}`}
                aria-label="اتصل بنا الآن"
                className="pointer-events-auto w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-emerald-700 text-white flex items-center justify-center shadow-xl shadow-brand-primary/40 border-2 border-white/20 animate-bounce-slow hover:scale-110 transition-transform active:scale-95"
            >
                <Phone className="w-8 h-8" />
            </a>

            {/* WhatsApp Button (Right) */}
            <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب"
                className="pointer-events-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 border-2 border-white/20 animate-bounce-slow [animation-delay:150ms] hover:scale-110 transition-transform active:scale-95 relative"
            >
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                <MessageCircle className="w-8 h-8" />
            </a>
        </div>
    );
}
