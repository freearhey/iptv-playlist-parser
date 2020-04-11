const Parser = {}

Parser.parse = content => {
  let playlist = {
    header: {},
    items: []
  }

  let manifest = content
    .split(/(?=#EXTINF)/)
    .map(l => l.trim())
    .filter(l => l)

  const firstLine = manifest.shift()

  if (!firstLine || !/#EXTM3U/.test(firstLine)) throw new Error('Playlist is not valid')

  playlist.header = parseHeader(firstLine)

  for (let line of manifest) {
    const item = {
      name: line.getName(),
      tvg: {
        id: line.getAttribute('tvg-id'),
        name: line.getAttribute('tvg-name'),
        language: line.getAttribute('tvg-language'),
        country: line.getAttribute('tvg-country'),
        logo: line.getAttribute('tvg-logo'),
        url: line.getAttribute('tvg-url')
      },
      group: {
        title: line.getAttribute('group-title')
      },
      http: {
        referrer: line.getVlcOption('http-referrer'),
        'user-agent': line.getVlcOption('http-user-agent')
      },
      url: line.getURL(),
      raw: line
    }

    playlist.items.push(item)
  }

  return playlist
}

function parseHeader(line) {
  const supportedAttrs = ['x-tvg-url']

  let attrs = {}
  for (let attrName of supportedAttrs) {
    const tvgUrl = line.getAttribute(attrName)
    if (tvgUrl) {
      attrs[attrName] = tvgUrl
    }
  }

  return {
    attrs,
    raw: line
  }
}

String.prototype.getAttribute = function (name) {
  let regex = new RegExp(name + '="(.*?)"', 'gi')
  let match = regex.exec(this)

  return match && match[1] ? match[1] : ''
}

String.prototype.getName = function () {
  let regex = new RegExp(',(.*?)\\n', 'gi')
  let match = regex.exec(this)

  return match && match[1] ? match[1] : ''
}

String.prototype.getVlcOption = function (name) {
  let regex = new RegExp('#EXTVLCOPT:' + name + '=(.*?)\\n', 'gi')
  let match = regex.exec(this)

  return match && match[1] ? match[1] : ''
}

String.prototype.getURL = function () {
  const last = this.split('\n')
    .map(l => l.trim())
    .filter(l => l)
    .pop()

  return last || ''
}

module.exports = Parser
