# iptv-playlist-parser

It parses IPTV playlist and converts it to a regular JavaScript object.

## Installation

  ```sh
  npm install iptv-playlist-parser
  ```

## Usage

  ```js
  import fs from 'fs'
  import parser from 'iptv-playlist-parser'

  const playlist = fs.readFileSync('./playlist.m3u', { encoding: 'utf-8'})
  const result = parser.parse(playlist)

  console.log(result)
  ```

## Example

Input:

```
#EXTM3U x-tvg-url="http://example.com/epg.xml.gz"
#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)
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
        logo: 'http://example.com/logo.png'
      },
      group: {
        title: 'News'
      },
      url: 'http://example.com/stream.m3u8',
      raw: '#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)\nhttp://example.com/stream.m3u8'
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