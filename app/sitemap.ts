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
      url: 'https://geicoevents.net/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://geicoevents.net/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://geicoevents.net/blog/event-budget-planning',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/blog/event-venue-selection',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/blog/event-setup-and-teardown',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/audioAndVisual',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/conferencesAndExhibitions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/stageAndLighting',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/printingAndBranding',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/productLaunches',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://geicoevents.net/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://geicoevents.net',
      lastModified: '2024-11-05',
      changeFrequency: 'weekly',
      priority: 0.5,
      videos: [
        {
          title: 'ivents by geico event process',
          thumbnail_loc: 'https://geicoevents.net/iventslogo.png',
          description: 'Number One Event Company in Kenya and East Africa - iVENTS by GEiCO',
          content_loc: 'https://geicoevents.net/iventslogo.png',
          duration: 600,
          expiration_date: '2024-11-05',
        },
      ],
    },
  ]
}