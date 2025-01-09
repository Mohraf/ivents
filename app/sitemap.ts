import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://geicoevents.net/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://geicoevents.net/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://geicoevents.net/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://geicoevents.net',
            lastModified: '2024-11-05',
            changeFrequency: 'weekly',
            priority: 0.5,
            videos: [
              {
                title: 'example',
                thumbnail_loc: 'https://geicoevents.net/iventslogo.png',
                description: 'Number One Event Company in Kenya and East Africa - iVENTS by GEiCO',
              },
            ],
          },
    ]
}