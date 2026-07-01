import type { MetadataRoute } from 'next'

const BASE = 'https://unitconversions.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },

    // 14 category pages
    { url: `${BASE}/length`,      lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/weight`,      lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/temperature`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/volume`,      lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/area`,        lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/speed`,       lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/time`,        lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/data`,        lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/pressure`,    lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/energy`,      lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/frequency`,   lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/angle`,       lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/fuel`,        lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/cooking`,     lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // 16 pair pages
    { url: `${BASE}/inches-to-cm`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cm-to-inches`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/kg-to-lbs`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/lbs-to-kg`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/miles-to-km`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/km-to-miles`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fahrenheit-to-celsius`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/celsius-to-fahrenheit`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/feet-to-meters`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/meters-to-feet`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/oz-to-grams`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/grams-to-oz`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gallons-to-liters`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/liters-to-gallons`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/mph-to-kph`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/kph-to-mph`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Static pages
    { url: `${BASE}/about`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
