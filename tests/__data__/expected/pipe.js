export default {
  header: {
    attrs: {},
    raw: '#EXTM3U'
  },
  items: [
    {
      name: 'Sport channel',
      tvg: {
        id: 'SportChannel',
        name: '',
        logo: '',
        url: '',
        rec: ''
      },
      group: {
        title: ''
      },
      http: {
        referrer: 'http://180upload.abc/embed-uaqmgcckhpcl.html',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko'
      },
      url: 'http://192.54.104.122:8080/d/abcdef/video.mp4',
      raw: `#EXTINF:17 tvg-id="SportChannel",Sport channel\r\nhttp://192.54.104.122:8080/d/abcdef/video.mp4|User-Agent=Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko&Referer=http://180upload.abc/embed-uaqmgcckhpcl.html`,
      line: 2,
      timeshift: '',
      catchup: {
        type: '',
        source: '',
        days: ''
      }
    },
    {
      name: 'News channel',
      tvg: {
        id: 'News99',
        name: '',
        logo: '',
        url: '',
        rec: ''
      },
      group: {
        title: ''
      },
      http: {
        referrer: 'http://test.abc/blank.html',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.25 Safari/537.36'
      },
      url: 'http://my-news-stream:8999/d/letsplay/video.mp4',
      raw: `#EXTINF:555 tvg-id="News99",News channel\r\n#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.25 Safari/537.36\r\nhttp://my-news-stream:8999/d/letsplay/video.mp4|Referer=http://test.abc/blank.html`,
      line: 4,
      timeshift: '',
      catchup: {
        type: '',
        source: '',
        days: ''
      }
    }
  ]
}
