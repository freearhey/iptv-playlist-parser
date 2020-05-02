declare module 'iptv-playlist-parser'

export function parse(
  content: string
): {
  header: {
    attrs: {
      'x-tvg-url': string
    }
    raw: string
  }
  items: {
    name: string
    tvg: {
      id: string
      name: string
      language: string
      country: string
      url: string
      logo: string
    }
    group: {
      title: string
    }
    http: {
      referrer: string
      'user-agent': string
    }
    url: string
    raw: string
  }[]
}
