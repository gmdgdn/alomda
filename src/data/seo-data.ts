export interface DistrictInterface {
    slug: string;
    nameAr: string;
    region: 'North' | 'South' | 'East' | 'West';
    housingType: 'Luxury Villa' | 'Apartment Complex' | 'Old Build';
    socioEconomic: 'High' | 'Mid' | 'Industrial';
    landmarks: string[];
    urgencyTrigger: string;
}

export interface ServiceInterface {
    slug: string;
    nameAr: string;
    synonyms: string[];
    priceRange: string;
    technicalDetails: string[];
}

export const SERVICES: ServiceInterface[] = [
    {
        slug: 'used-bedrooms',
        nameAr: 'غرف نوم مستعملة',
        synonyms: ['غرف نوم ايكيا', 'غرف نوم وطني', 'غرف نوم صيني', 'غرف نوم تركية'],
        priceRange: '500-2500 ريال',
        technicalDetails: ['فك وتركيب مجاني', 'نقل آمن', 'تسعير فوري'],
    },
    {
        slug: 'used-acs',
        nameAr: 'مكيفات مستعملة',
        synonyms: ['مكيفات سبليت', 'مكيفات شباك', 'مكيفات سكراب', 'وحدات تكييف'],
        priceRange: '200-1500 ريال',
        technicalDetails: ['فحص الفريون', 'فك النحاس', 'نقل الوحدات الخارجية'],
    },
    {
        slug: 'used-kitchens',
        nameAr: 'مطابخ مستعملة',
        synonyms: ['مطابخ المنيوم', 'مطابخ خشب', 'مطابخ صاج', 'دواليب مطبخ'],
        priceRange: '1000-5000 ريال',
        technicalDetails: ['فك الرخام', 'فك الدواليب', 'نقل بعناية'],
    },
    {
        slug: 'used-appliances',
        nameAr: 'اجهزة كهربائية',
        synonyms: ['ثلاجات', 'غسالات', 'افران', 'شاشات'],
        priceRange: '300-2000 ريال',
        technicalDetails: ['فحص التشغيل', 'نقل آمن', 'شراء السكراب'],
    },
    {
        slug: 'majlis-sofas',
        nameAr: 'مجالس وكنب',
        synonyms: ['مجالس عربية', 'كنب امريكي', 'جلسات ارضية', 'موكيت وسجاد'],
        priceRange: '400-3000 ريال',
        technicalDetails: ['نقل العفش', 'تنظيف الموقع', 'تحميل فوري'],
    },
];

export const DISTRICTS: DistrictInterface[] = [
    // North Riyadh (High/Luxury)
    {
        slug: 'al-malqa',
        nameAr: 'حي الملقا',
        region: 'North',
        housingType: 'Luxury Villa',
        socioEconomic: 'High',
        landmarks: ['طريق الملك سلمان', 'الرياض بارك', 'مستشفى الحبيب'],
        urgencyTrigger: 'تجديد الاثاث',
    },
    {
        slug: 'al-yasmin',
        nameAr: 'حي الياسمين',
        region: 'North',
        housingType: 'Luxury Villa',
        socioEconomic: 'High',
        landmarks: ['طريق أنس بن مالك', 'الياسمين بلازا'],
        urgencyTrigger: 'الانتقال لمنزل جديد',
    },
    {
        slug: 'al-aqiq',
        nameAr: 'حي العقيق',
        region: 'North',
        housingType: 'Apartment Complex',
        socioEconomic: 'High',
        landmarks: ['مركز الملك عبدالله المالي', 'العقيق سكوير'],
        urgencyTrigger: 'تغيير الديكور',
    },
    {
        slug: 'al-sahafa',
        nameAr: 'حي الصحافة',
        region: 'North',
        housingType: 'Apartment Complex',
        socioEconomic: 'Mid',
        landmarks: ['طريق الملك فهد', 'نادي الشباب'],
        urgencyTrigger: 'الخروج النهائي',
    },
    {
        slug: 'al-narjis',
        nameAr: 'حي النرجس',
        region: 'North',
        housingType: 'Apartment Complex',
        socioEconomic: 'Mid',
        landmarks: ['جامعة الأميرة نورة', 'طريق عثمان بن عفان'],
        urgencyTrigger: 'تصفية الشقة',
    },

    // East Riyadh (Mid/Mixed)
    {
        slug: 'al-hamra',
        nameAr: 'حي الحمراء',
        region: 'East',
        housingType: 'Luxury Villa',
        socioEconomic: 'High',
        landmarks: ['ممشى الملك عبدالله', 'الحمراء مول'],
        urgencyTrigger: 'تجديد الفيلا',
    },
    {
        slug: 'al-yarmuk',
        nameAr: 'حي اليرموك',
        region: 'East',
        housingType: 'Apartment Complex',
        socioEconomic: 'Mid',
        landmarks: ['طريق الدمام', 'اطياف مول'],
        urgencyTrigger: 'نقل عفش',
    },
    {
        slug: 'al-munsiyah',
        nameAr: 'حي المونسية',
        region: 'East',
        housingType: 'Apartment Complex',
        socioEconomic: 'Mid',
        landmarks: ['محطة القطار', 'طريق الثمامة'],
        urgencyTrigger: 'بيع اثاث زائد',
    },
    {
        slug: 'al-rawdah',
        nameAr: 'حي الروضة',
        region: 'East',
        housingType: 'Old Build',
        socioEconomic: 'Mid',
        landmarks: ['خريص مول', 'شارع الحسن بن علي'],
        urgencyTrigger: 'ترميم المنزل',
    },
    {
        slug: 'al-khaleej',
        nameAr: 'حي الخليج',
        region: 'East',
        housingType: 'Apartment Complex',
        socioEconomic: 'Mid',
        landmarks: ['استاد الملك فهد', 'طريق الملك عبدالله'],
        urgencyTrigger: 'السفر',
    },

    // West Riyadh (Mid/Old)
    {
        slug: 'al-laban',
        nameAr: 'حي لبن',
        region: 'West',
        housingType: 'Luxury Villa',
        socioEconomic: 'Mid',
        landmarks: ['الجسر المعلق', 'نادي الرياض'],
        urgencyTrigger: 'تغيير الاثاث',
    },
    {
        slug: 'al-mahdiyah',
        nameAr: 'حي المهدية',
        region: 'West',
        housingType: 'Luxury Villa',
        socioEconomic: 'Mid',
        landmarks: ['وادي حنيفة', 'المخرج الغربي'],
        urgencyTrigger: 'تأثيث جديد',
    },
    {
        slug: 'al-suwaidi',
        nameAr: 'حي السويدي',
        region: 'West',
        housingType: 'Old Build',
        socioEconomic: 'Mid',
        landmarks: ['القصر مول', 'حديقة السويدي'],
        urgencyTrigger: 'بيع المستعمل',
    },
    {
        slug: 'al-badiah',
        nameAr: 'حي البديعة',
        region: 'West',
        housingType: 'Old Build',
        socioEconomic: 'Mid',
        landmarks: ['سوق الرياض الدولي', 'العثيم مول'],
        urgencyTrigger: 'تجديد الشقة',
    },
    {
        slug: 'dhahrat-al-badiah',
        nameAr: 'ظهرة البديعة',
        region: 'West',
        housingType: 'Old Build',
        socioEconomic: 'Mid',
        landmarks: ['طريق المدينة', 'سوق الخضار'],
        urgencyTrigger: 'اخلاء طرف',
    },

    // South Riyadh (Industrial/Old)
    {
        slug: 'al-aziziyah',
        nameAr: 'حي العزيزية',
        region: 'South',
        housingType: 'Old Build',
        socioEconomic: 'Industrial',
        landmarks: ['سوق الحراج', 'النقل الجماعي'],
        urgencyTrigger: 'بيع سكراب',
    },
    {
        slug: 'al-shifa',
        nameAr: 'حي الشفاء',
        region: 'South',
        housingType: 'Old Build',
        socioEconomic: 'Industrial',
        landmarks: ['معارض السيارات', 'الشفاء مول'],
        urgencyTrigger: 'تصفية مستودع',
    },
    {
        slug: 'al-mansourah',
        nameAr: 'حي المنصورة',
        region: 'South',
        housingType: 'Old Build',
        socioEconomic: 'Industrial',
        landmarks: ['طريق الخرج', 'حديقة المنصورة'],
        urgencyTrigger: 'بيع خردة',
    },
    {
        slug: 'al-suwaidi-al-gharb',
        nameAr: 'السويدي الغربي',
        region: 'South',
        housingType: 'Old Build',
        socioEconomic: 'Mid',
        landmarks: ['الدائري الجنوبي', 'اسواق السدحان'],
        urgencyTrigger: 'نقل سكن',
    },
    {
        slug: 'nemar',
        nameAr: 'حي نمار',
        region: 'South',
        housingType: 'Luxury Villa',
        socioEconomic: 'Mid',
        landmarks: ['منتزه نمار', 'طريق ديراب'],
        urgencyTrigger: 'تغيير عفش',
    },
];
