import { Bed, AirVent, ChefHat, Refrigerator, Armchair } from 'lucide-react';

export interface Service {
    slug: string;
    nameAr: string;
    keywords: string[];
    icon: any; // Lucide icon component
}

export interface District {
    slug: string;
    nameAr: string;
    region: 'North' | 'South' | 'East' | 'West';
    landmark: string;
    housingType: 'Villa' | 'Apartment';
    avgResponseTime: string;
}

export const SERVICES: Service[] = [
    {
        slug: 'bedroom-sets',
        nameAr: 'غرف نوم',
        keywords: ['غرف نوم مستعملة', 'غرف نوم ايكيا', 'غرف نوم وطني', 'غرف نوم صيني'],
        icon: Bed,
    },
    {
        slug: 'air-conditioners',
        nameAr: 'مكيفات',
        keywords: ['مكيفات سبليت', 'مكيفات شباك', 'مكيفات سكراب', 'نحاس'],
        icon: AirVent,
    },
    {
        slug: 'kitchens',
        nameAr: 'مطابخ',
        keywords: ['مطابخ المنيوم', 'مطابخ خشب', 'مطابخ امريكي', 'مطابخ مستعملة'],
        icon: ChefHat,
    },
    {
        slug: 'appliances',
        nameAr: 'اجهزة كهربائية',
        keywords: ['ثلاجات', 'غسالات', 'افران', 'شاشات'],
        icon: Refrigerator,
    },
    {
        slug: 'majlis',
        nameAr: 'مجالس',
        keywords: ['مجالس عربية', 'كنب', 'سجاد', 'موكييت'],
        icon: Armchair,
    },
];

export const DISTRICTS: District[] = [
    // North Riyadh
    { slug: 'al-malqa', nameAr: 'حي الملقا', region: 'North', landmark: 'طريق الملك سلمان', housingType: 'Villa', avgResponseTime: '15 دقيقة' },
    { slug: 'al-yasmin', nameAr: 'حي الياسمين', region: 'North', landmark: 'طريق أنس بن مالك', housingType: 'Villa', avgResponseTime: '20 دقيقة' },
    { slug: 'al-narjis', nameAr: 'حي النرجس', region: 'North', landmark: 'جامعة الأميرة نورة', housingType: 'Apartment', avgResponseTime: '25 دقيقة' },
    { slug: 'al-sahafa', nameAr: 'حي الصحافة', region: 'North', landmark: 'طريق الملك فهد', housingType: 'Apartment', avgResponseTime: '15 دقيقة' },
    { slug: 'al-aqiq', nameAr: 'حي العقيق', region: 'North', landmark: 'مركز الملك عبدالله المالي', housingType: 'Apartment', avgResponseTime: '10 دقيقة' },

    // East Riyadh
    { slug: 'al-hamra', nameAr: 'حي الحمراء', region: 'East', landmark: 'ممشى الملك عبدالله', housingType: 'Villa', avgResponseTime: '30 دقيقة' },
    { slug: 'al-yarmuk', nameAr: 'حي اليرموك', region: 'East', landmark: 'طريق الدمام', housingType: 'Apartment', avgResponseTime: '35 دقيقة' },
    { slug: 'al-munsiyah', nameAr: 'حي المونسية', region: 'East', landmark: 'محطة القطار', housingType: 'Villa', avgResponseTime: '40 دقيقة' },
    { slug: 'al-rawdah', nameAr: 'حي الروضة', region: 'East', landmark: 'خريص مول', housingType: 'Villa', avgResponseTime: '25 دقيقة' },
    { slug: 'al-khaleej', nameAr: 'حي الخليج', region: 'East', landmark: 'استاد الملك فهد', housingType: 'Apartment', avgResponseTime: '30 دقيقة' },

    // West Riyadh
    { slug: 'al-laban', nameAr: 'حي لبن', region: 'West', landmark: 'الجسر المعلق', housingType: 'Villa', avgResponseTime: '20 دقيقة' },
    { slug: 'al-mahdiyah', nameAr: 'حي المهدية', region: 'West', landmark: 'وادي حنيفة', housingType: 'Villa', avgResponseTime: '25 دقيقة' },
    { slug: 'al-suwaidi', nameAr: 'حي السويدي', region: 'West', landmark: 'القصر مول', housingType: 'Apartment', avgResponseTime: '30 دقيقة' },
    { slug: 'al-badiah', nameAr: 'حي البديعة', region: 'West', landmark: 'سوق الرياض الدولي', housingType: 'Apartment', avgResponseTime: '35 دقيقة' },
    { slug: 'dhahrat-al-badiah', nameAr: 'ظهرة البديعة', region: 'West', landmark: 'طريق المدينة', housingType: 'Villa', avgResponseTime: '30 دقيقة' },

    // South Riyadh
    { slug: 'al-aziziyah', nameAr: 'حي العزيزية', region: 'South', landmark: 'سوق الحراج', housingType: 'Apartment', avgResponseTime: '40 دقيقة' },
    { slug: 'al-shifa', nameAr: 'حي الشفاء', region: 'South', landmark: 'معارض السيارات', housingType: 'Villa', avgResponseTime: '45 دقيقة' },
    { slug: 'al-mansourah', nameAr: 'حي المنصورة', region: 'South', landmark: 'طريق الخرج', housingType: 'Apartment', avgResponseTime: '50 دقيقة' },
    { slug: 'al-suwaidi-al-gharb', nameAr: 'السويدي الغربي', region: 'South', landmark: 'الدائري الجنوبي', housingType: 'Villa', avgResponseTime: '35 دقيقة' },
    { slug: 'nemar', nameAr: 'حي نمار', region: 'South', landmark: 'منتزه نمار', housingType: 'Villa', avgResponseTime: '40 دقيقة' },
];
