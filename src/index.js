const M3U8FileParser = require('m3u8-file-parser')

const Parser = {}

Parser.parse = (content) => {
  const parser = new M3U8FileParser()
  parser.read(content)
  const result = parser.getResult()
  const header = parseHeader(content)

  let playlist = {
    tvg: {
      url: header.attrs['x-tvg-url'] || ''
    },
    channels: []
  }

  for(let segment of result.segments) {
    const channel = {
      name: segment.inf.title || '',
      tvg: {
        id: segment.inf['tvg-id'] || segment.inf['tvg-ID'] || '',
        name: segment.inf['tvg-name'] || '',
        logo: segment.inf['tvg-logo'] || '',
        url: segment.inf['tvg-url'] || ''
      },
      group: {
        title: segment.inf['group-title'] || ''
      },
      url: segment.url || ''
    }

    playlist.channels.push(channel)
  }

  return playlist
}

function parseHeader(string) {
  const matches = string.match(/#EXTM3U(.*)/)
  const head = matches ? matches[0] : null

  let header = {
    attrs: {}
  }

  if(head) {
    const attrs = matches[1].split(' ').filter(p => p)

    for(const attr of attrs) {
      const attrParts = attr.split('=')
      
      header.attrs[attrParts[0]] = attrParts[1].replace(/\"/g, '')
    }
  }

  return header
}

module.exports = Parser
