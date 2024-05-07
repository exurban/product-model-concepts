import { getLegoEntries } from 'app/lego/utils'

export const baseUrl = 'https://thegyre.io'

export default async function sitemap() {
  let entries = getLegoEntries().map((entry) => ({
    url: `${baseUrl}/lego/${entry.slug}`,
    lastModified: entry.metadata.lastModified,
  }))

  let routes = ['', '/lego'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...entries]
}
