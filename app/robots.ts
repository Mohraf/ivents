import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://geicoevents.net/sitemap.xml',
    }
}


{
    title: 'ivents by geico event process',
    thumbnail_loc: 'https://geicoevents.net/iventslogo.png',
    description: 'Number One Event Company in Kenya and East Africa - iVENTS by GEiCO',
  },