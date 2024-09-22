import { MetadataRoute } from 'next'

export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: 'https://schoolfes.hfhs-digital.app/sitemap.xml',
  }
}