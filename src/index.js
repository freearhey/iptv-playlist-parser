const Parser = {}

Parser.parse = content => {
  let playlist = {
    header: {},
    items: []
  }

  let manifest = content.split(/(?=#EXTINF)/).map(l => l.trim())

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
        url: line.getAttribute('tvg-url'),
        rec: line.getAttribute('tvg-rec')
      },
      group: {
        title: line.getGroup() || line.getAttribute('group-title')
      },
      http: {
        referrer: line.getVlcOption('http-referrer') || line.getKodiOption('Referer'),
        'user-agent': line.getVlcOption('http-user-agent') || line.getKodiOption('User-Agent')
      },
      url: line.getURL(),
      raw: line,
      catchup: {
        type: line.getAttribute('catchup'),
        days: line.getAttribute('catchup-days'),
        source: line.getAttribute('catchup-source')
      },
      timeshift: line.getAttribute('timeshift')
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

function getFullUrl(url) {
  const supportedTags = ['#EXTVLCOPT', '#EXTINF', '#EXTGRP']
  const last = url.split('\n')
    .filter(l => l)
    .map(l => l.trim())
    .filter(l => {
      return supportedTags.every(t => !l.startsWith(t))
    })
    .shift()
    return last || '';
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
