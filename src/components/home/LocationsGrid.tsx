import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { RIYADH_DISTRICTS as DISTRICTS } from '../../data/districts';

// Group districts by region
const districtsByRegion = {
    North: DISTRICTS.filter(d => d.region === 'North'),
    East: DISTRICTS.filter(d => d.region === 'East'),
    West: DISTRICTS.filter(d => d.region === 'West'),
    South: DISTRICTS.filter(d => d.region === 'South'),
};

const regionLabels = {
    North: 'شمال الرياض',
    East: 'شرق الرياض',
    West: 'غرب الرياض',
    South: 'جنوب الرياض',
};

type RegionKey = keyof typeof districtsByRegion;

const regionSlugMap: Record<RegionKey, string> = {
    North: 'north-riyadh',
    East: 'east-riyadh',
    West: 'west-riyadh',
    South: 'south-riyadh',
};

export default function LocationsGrid() {
    const [activeRegion, setActiveRegion] = useState<RegionKey>('North');

    return (
        <section className="bg-slate-50 py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-emerald-600 font-bold text-sm tracking-wider uppercase mb-2 block">تغطية شاملة</span>
                    <h2 className="text-4xl font-black text-slate-900 sm:text-5xl mb-6 leading-tight">
                        نغطي جميع أحياء <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">الرياض</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        أسطولنا موزع استراتيجياً في جميع أنحاء الرياض لضمان الوصول إليك في أسرع وقت. اختر منطقتك وتواصل معنا.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {(Object.keys(districtsByRegion) as RegionKey[]).map((region) => (
                        <button
                            key={region}
                            onClick={() => setActiveRegion(region)}
                            className={`rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 ${activeRegion === region
                                ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 scale-105'
                                : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200'
                                }`}
                        >
                            {regionLabels[region]}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div
                    key={activeRegion}
                    className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-fade-up"
                >
                    {districtsByRegion[activeRegion].map((district, index) => (
                        <a
                            key={district.slug}
                            href={`/riyadh/${regionSlugMap[activeRegion]}/${district.slug}`}
                            className="group flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1 cursor-pointer block"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="font-bold text-slate-800 group-hover:text-emerald-800 transition-colors">{district.nameAr}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
