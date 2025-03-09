declare module 'iptv-playlist-parser'

export interface PlaylistHeader {
  attrs: {
    'x-tvg-url': string
  }
  raw: string
}

export interface PlaylistItemTvg {
  id: string
  name: string
  url: string
  logo: string
  rec: string
  shift: string
}

export interface PlaylistItem {
  name: string
  tvg: PlaylistItemTvg
  group: {
    title: string
  }
  http: {
    referrer: string
    'user-agent': string
  }
  url: string
  raw: string
  line: number
  timeshift: string
  catchup: {
    type: string
    source: string
    days: string
  }
  lang: string
}

export interface Playlist {
  header: PlaylistHeader
  items: PlaylistItem[]
}

export function parse(content: string): Playlist
