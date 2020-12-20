# iptv-playlist-parser [![Build Status](https://travis-ci.org/freearhey/iptv-playlist-parser.svg?branch=master)](https://travis-ci.org/freearhey/iptv-playlist-parser)

It parses IPTV playlist and converts it to a regular JavaScript object.

## Installation

```sh
npm install iptv-playlist-parser
```

## Usage

```js
import fs from 'fs'
import parser from 'iptv-playlist-parser'

const playlist = fs.readFileSync('./playlist.m3u', { encoding: 'utf-8' })
const result = parser.parse(playlist)

console.log(result)
```

## Example

Input:

```
#EXTM3U x-tvg-url="http://example.com/epg.xml.gz"
#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-language="English" tvg-country="US" tvg-url="http://195.154.221.171/epg/guide.xml.gz" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)
#EXTGRP:News
#EXTVLCOPT:http-referrer=http://example.com/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)
http://example.com/stream.m3u8
```

Output:

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
        language: 'English',
        country: 'US',
        url: 'http://195.154.221.171/epg/guide.xml.gz',
        logo: 'http://example.com/logo.png'
      },
      group: {
        title: 'News'
      },
      http: {
        referrer: 'http://example.com/',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)'
      },
      url: 'http://example.com/stream.m3u8',
      raw: '#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-language="English" tvg-country="US" tvg-url="http://195.154.221.171/epg/guide.xml.gz" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)\n#EXTVLCOPT:http-referrer=http://example.com/\n#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)\nhttp://example.com/stream.m3u8'
    }
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
