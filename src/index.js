const M3U8FileParser = require('m3u8-file-parser')
const decamelize = require('decamelize')

const Parser = {}

Parser.parse = (content) => {
  const parser = new M3U8FileParser()
  parser.read(content)
  const result = parser.getResult()
  const header = parseHeader(content)

  let playlist = {
    header,
    items: []
  }

  for(let segment of result.segments) {
    if(!segment || !segment.inf) continue

    const item = {
      name: segment.inf.title || '',
      tvg: {
        id: segment.inf.tvgId || '',
        name: segment.inf.tvgName || '',
        language: segment.inf.tvgLanguage || '',
        country: segment.inf.tvgCountry || '',
        logo: segment.inf.tvgLogo || '',
        url: segment.inf.tvgUrl || ''
      },
      group: {
        title: segment.inf.groupTitle || ''
      },
      url: segment.url || '',
      raw: getRaw(segment)
    }

    playlist.items.push(item)
  }

  return playlist
}

function parseHeader(string) {
  const matches = string.match(/#EXTM3U(.*)/)
  const head = matches ? matches[0] : null

  let header = {
    attrs: {},
    raw: ''
  }

  if(head) {
    const attrs = matches[1].split(' ').filter(p => p)

    for(const attr of attrs) {
      const attrParts = attr.split('=')
      
      header.attrs[attrParts[0]] = attrParts[1].replace(/\"/g, '')
    }

    header.raw = head
  }

  return header
}

function getRaw(segment) {
  const duration = segment.inf.duration
  const title = segment.inf.title
  let info = segment.inf
  delete info.duration
  delete info.title
  let attrs = [
    duration
  ]
  for(const key in info) {
    const value = info[key]
    attrs.push(`${decamelize(key, '-')}="${value}"`)
  }

  return `#EXTINF:${attrs.join(' ')},${title}\n${segment.url}`
}

module.exports = Parser
