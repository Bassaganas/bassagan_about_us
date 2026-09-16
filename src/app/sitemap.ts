import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

// Next writes this out as a static sitemap.xml during `output: "export"`.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
