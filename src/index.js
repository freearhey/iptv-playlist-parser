const Parser = {}

Parser.parse = content => {
  let playlist = {
    header: {},
    items: []
  }

  let manifest = content.split(/(?=#EXTINF)/).map(l => l.trim())
  const lines = content.split('\n').map(l => l.trim())

  const firstLine = manifest.shift()

  if (!firstLine || !/#EXTM3U/.test(firstLine)) throw new Error('Playlist is not valid')

  playlist.header = parseHeader(firstLine)

  for (let stream of manifest) {
    const item = {
      name: stream.getName(),
      tvg: {
        id: stream.getAttribute('tvg-id'),
        name: stream.getAttribute('tvg-name'),
        language: stream.getAttribute('tvg-language'),
        country: stream.getAttribute('tvg-country'),
        logo: stream.getAttribute('tvg-logo'),
        url: stream.getAttribute('tvg-url'),
        rec: stream.getAttribute('tvg-rec')
      },
      group: {
        title: stream.getGroup() || stream.getAttribute('group-title')
      },
      http: {
        referrer: stream.getVlcOption('http-referrer') || stream.getKodiOption('Referer'),
        'user-agent':
          stream.getVlcOption('http-user-agent') ||
          stream.getKodiOption('User-Agent') ||
          stream.getAttribute('user-agent')
      },
      url: stream.getURL(),
      raw: stream,
      line: indexOf(lines, stream),
      catchup: {
        type: stream.getAttribute('catchup'),
        days: stream.getAttribute('catchup-days'),
        source: stream.getAttribute('catchup-source')
      },
      timeshift: stream.getAttribute('timeshift')
    }

    playlist.items.push(item)
  }

  return playlist
}

function indexOf(lines, stream) {
  const line = stream.split('\n')[0]

  return lines.indexOf(line.trim())
}

function parseHeader(line) {
  const supportedAttrs = ['x-tvg-url', 'url-tvg']

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

function getFullUrl(url) {
  const supportedTags = ['#EXTVLCOPT', '#EXTINF', '#EXTGRP']
  const last = url
    .split('\n')
    .filter(l => l)
    .map(l => l.trim())
    .filter(l => {
      return supportedTags.every(t => !l.startsWith(t))
    })
    .shift()
  return last || ''
}

String.prototype.getAttribute = function (name) {
  let regex = new RegExp(name + '="(.*?)"', 'gi')
  let match = regex.exec(this)

  return match && match[1] ? match[1] : ''
}

String.prototype.getName = function () {
  let name = this.split(/[\r\n]+/)
    .shift()
    .split(',')
    .pop()

  return name || ''
}

String.prototype.getVlcOption = function (name) {
  let regex = new RegExp('#EXTVLCOPT:' + name + '=(.*)', 'gi')
  let match = regex.exec(this)

  return match && match[1] && typeof match[1] === 'string' ? match[1].replace(/\"/g, '') : ''
}

String.prototype.getGroup = function () {
  let regex = new RegExp('#EXTGRP:(.*)', 'gi')
  let match = regex.exec(this)

  return match && match[1] ? match[1] : ''
}

String.prototype.getURL = function () {
  const last = getFullUrl(this).split('|')[0]
  return last || ''
}

String.prototype.getKodiOption = function (name) {
  const url = getFullUrl(this)
  const regex = new RegExp(name + '=(\\w[^&]*)', 'g')
  const match = regex.exec(url)
  return match && match[1] ? match[1] : ''
}

module.exports = Parser
