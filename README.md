# iptv-playlist-parser [![Build Status](https://app.travis-ci.com/freearhey/iptv-playlist-parser.svg?branch=master)](https://app.travis-ci.com/freearhey/iptv-playlist-parser)

It parses IPTV playlist and converts it to a regular JavaScript object.

## Installation

```sh
npm install iptv-playlist-parser
```

## Usage

### From string

```js
const parser = require('iptv-playlist-parser')
// import parser from 'iptv-playlist-parser'

const playlist = `#EXTM3U x-tvg-url="http://example.com/epg.xml.gz"
#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-url="http://195.154.221.171/epg/guide.xml.gz" tvg-shift="-4.5" timeshift="3" catchup="shift" catchup-days="3" catchup-source="https://m3u-server/hls-apple-s4-c494-abcdef.m3u8?utc=325234234&lutc=3123125324" lang="eng" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)
#EXTGRP:News
#EXTVLCOPT:http-referrer=http://example.com/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)
http://example.com/stream.m3u8`

const result = parser.parse(playlist)

console.log(result)
```

### From file

```js
const fs = require('fs')
const parser = require('iptv-playlist-parser')

const playlist = fs.readFileSync('playlist.m3u', 'utf8')

const result = parser.parse(playlist)

console.log(result)
```

### From URL

```js
const https = require('https')
const parser = require('iptv-playlist-parser')

https
  .get('https://example.com/playlist.m3u', res => {
    let data = []

    res.on('data', chunk => {
      data.push(chunk)
    })

    res.on('end', () => {
      const playlist = Buffer.concat(data).toString()

      const result = parser.parse(playlist)

      console.log(result)
    })
  })
  .on('error', err => {
    console.error(err.message)
  })
```

## Output

```js
{
  header: {
    attrs: {
      'x-tvg-url': 'http://example.com/epg.xml.gz'
    },
    raw: '#EXTM3U x-tvg-url="http://example.com/epg.xml.gz"'
  },
  items: [
    {
      name: 'CNN (US)',
      tvg: {
        id: 'cnn.us',
        name: 'CNN',
        url: 'http://195.154.221.171/epg/guide.xml.gz',
        logo: 'http://example.com/logo.png',
        rec: '',
        shift: '-4.5'
      },
      group: {
        title: 'News'
      },
      http: {
        referrer: 'http://example.com/',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)'
      },
      url: 'http://example.com/stream.m3u8',
      raw: '#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-url="http://195.154.221.171/epg/guide.xml.gz" tvg-shift="-4.5" timeshift="3" catchup="shift" catchup-days="3" catchup-source="https://m3u-server/hls-apple-s4-c494-abcdef.m3u8?utc=325234234&lutc=3123125324" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)\n#EXTVLCOPT:http-referrer=http://example.com/\n#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)\nhttp://example.com/stream.m3u8',
      line: 2,
      timeshift: '3',
      catchup: {
        type: 'shift',
        source: 'https://m3u-server/hls-apple-s4-c494-abcdef.m3u8?utc=325234234&lutc=3123125324',
        days: '3'
      },
      lang: 'eng'
    },
    //...
  ]
}
```

## Testing

```sh
npm test
```

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/freearhey/iptv-playlist-parser/issues) or a [pull request](https://github.com/freearhey/iptv-playlist-parser/pulls).

## License

[MIT](LICENSE)
