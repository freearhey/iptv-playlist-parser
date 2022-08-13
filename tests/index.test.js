import parser from '../src'
import path from 'path'
import fs from 'fs'

it('parse playlist', () => {
  expect(parser.parse(content('tests/__data__/base.m3u'))).toStrictEqual({
    header: {
      attrs: {
        'x-tvg-url': 'http://195.154.221.171/epg/guidealbania.xml.gz'
      },
      raw: '#EXTM3U x-tvg-url="http://195.154.221.171/epg/guidealbania.xml.gz"'
    },
    items: [
      {
        name: 'Channel 1 (Tested)',
        tvg: {
          id: 'CH1',
          name: 'Ch 1',
          logo: 'http://www.rtvchannel.com.au/wp-content/uploads/2017/04/xshow_08.png,Mic_.2KNN9OHw1p.png.pagespeed.ce.2KNN9OHw1p.png',
          url: 'http://195.154.221.171/epg/guide.xml.gz',
          rec: '3'
        },
        group: {
          title: 'Только Android'
        },
        http: {
          referrer: 'http://player.livesports.pw/la2/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.25 Safari/537.36'
        },
        url: 'http://livestream.htp.tv/hls-live/livepkgr/_definst_/H1/H1_HQ.m3u8',
        raw: '    #EXTINF:-1 tvg-ID="CH1" tvg-name="Ch 1" tvg-logo="http://www.rtvchannel.com.au/wp-content/uploads/2017/04/xshow_08.png,Mic_.2KNN9OHw1p.png.pagespeed.ce.2KNN9OHw1p.png" tvg-url="http://195.154.221.171/epg/guide.xml.gz" tvg-rec="3" group-title="Music",Channel 1 (Tested)\r\n    #EXTGRP:Только Android\r\n    #EXTVLCOPT:http-referrer=http://player.livesports.pw/la2/\r\n    #EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.25 Safari/537.36\r\n    http://livestream.htp.tv/hls-live/livepkgr/_definst_/H1/H1_HQ.m3u8',
        line: 2,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      },
      {
        name: 'Channel 2',
        tvg: {
          id: 'CH2',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'stream/chunklist.m3u8',
        raw: `    #EXTINF:16 tvg-id="CH2",Channel 2\r\nstream/chunklist.m3u8`,
        line: 7,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      },
      {
        name: '=>(★ TURKİYE ★)<=',
        tvg: {
          id: '',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'http://wodpro24.tr4545.in:8080/expred/peru8k.mp4',
        raw: `#EXTINF:1,=>(★ TURKİYE ★)<=\r\n\r\nhttp://wodpro24.tr4545.in:8080/expred/peru8k.mp4`,
        line: 12,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      },
      {
        name: 'TRT 1 HD',
        tvg: {
          id: '',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: "https://video-rvd-lmg.rnp.br/live/ocp(t(FfZfeFx3QG4)r(TOqkzw)a(ut273w)p(d(lCo)k(ow4)m(U1zbeMZOcvuVp_PjPC5VeA)n(a(-xL_Aw)s(yeg)'a(vuk2sg)s(3Rc)))s(s(2h8)b(OVsX9brZ0psZeMaQYt9O46THOxFsPHFB6R_YrLO_lAYLehFKlBcB3utUOhZjyWY7C52ngNY4Ow9Ook29TA)'s(gRY)b(iE9B80a6sOKUZn0UnLJQU_bKwqIDP29GWBxvJz1bQ1ihEmrOuDaUGTinW0l8unt4U9_v4jCwiAC2T6TOa8pgVRIAfsnYG9Y7VoI5EmwQ)'s(A4Q)b(ayZ0dwLn))m(0))/index.m3u8",
        raw: `#EXTINF:1 timeshift="3" catchup="shift" catchup-days="3" catchup-source="https://m3u-server/hls-apple-s4-c494-abcdef.m3u8?utc=325234234&lutc=3123125324",TRT 1 HD\r\nhttps://video-rvd-lmg.rnp.br/live/ocp(t(FfZfeFx3QG4)r(TOqkzw)a(ut273w)p(d(lCo)k(ow4)m(U1zbeMZOcvuVp_PjPC5VeA)n(a(-xL_Aw)s(yeg)'a(vuk2sg)s(3Rc)))s(s(2h8)b(OVsX9brZ0psZeMaQYt9O46THOxFsPHFB6R_YrLO_lAYLehFKlBcB3utUOhZjyWY7C52ngNY4Ow9Ook29TA)'s(gRY)b(iE9B80a6sOKUZn0UnLJQU_bKwqIDP29GWBxvJz1bQ1ihEmrOuDaUGTinW0l8unt4U9_v4jCwiAC2T6TOa8pgVRIAfsnYG9Y7VoI5EmwQ)'s(A4Q)b(ayZ0dwLn))m(0))/index.m3u8`,
        line: 15,
        timeshift: '3',
        catchup: {
          type: 'shift',
          source: 'https://m3u-server/hls-apple-s4-c494-abcdef.m3u8?utc=325234234&lutc=3123125324',
          days: '3'
        }
      },
      {
        name: ' name',
        tvg: {
          id: '',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'http://100.101.102.103:1000/index.m3u8',
        raw: `#EXTINF: -1, name\r\nhttp://100.101.102.103:1000/index.m3u8`,
        line: 17,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      }
    ]
  })
})

it('could parse playlist with comments', () => {
  expect(parser.parse(content('tests/__data__/comment.m3u'))).toStrictEqual({
    header: {
      attrs: {},
      raw: '#EXTM3U'
    },
    items: [
      {
        name: 'tamazight tv8',
        tvg: {
          id: '',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'http://cdn-hls.globecast.tv/live/ramdisk/tamazight_tv8_snrt/hls_snrt/index.m3u8',
        raw: '#EXTINF:-1,tamazight tv8\r\nhttp://cdn-hls.globecast.tv/live/ramdisk/tamazight_tv8_snrt/hls_snrt/index.m3u8',
        line: 3,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      }
    ]
  })
})

it('could parse playlist with #EXTGRP and #EXTVLCOPT tag', () => {
  expect(parser.parse(content('tests/__data__/vlcopt.m3u'))).toStrictEqual({
    header: {
      attrs: {},
      raw: '#EXTM3U'
    },
    items: [
      {
        name: 'Test Channel',
        tvg: {
          id: '',
          name: 'TestChannel',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: 'News'
        },
        http: {
          referrer: '',
          'user-agent': 'Dalvik/2.1.0 (Linux; U; Android 6.0.1;)'
        },
        url: 'http://test.channel.com/iptv/secret/1/index.m3u8',
        raw: '#EXTINF:0 tvg-name="TestChannel" group-title="Entertainment",Test Channel\r\n#EXTGRP:News\r\n#EXTVLCOPT:http-user-agent="Dalvik/2.1.0 (Linux; U; Android 6.0.1;)"\r\nhttp://test.channel.com/iptv/secret/1/index.m3u8',
        line: 2,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      }
    ]
  })
})

it('could parse playlist with user agent in attribute', () => {
  expect(parser.parse(content('tests/__data__/user_agent.m3u'))).toStrictEqual({
    header: {
      attrs: {},
      raw: '#EXTM3U'
    },
    items: [
      {
        name: 'Agromais',
        tvg: {
          id: 'Agromais.br',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: 'Entertainment'
        },
        http: {
          referrer: '',
          'user-agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
        },
        url: 'https://agromais/playlist.m3u8',
        raw: `#EXTINF:-1 tvg-id="Agromais.br" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148" group-title="Entertainment",Agromais\r\nhttps://agromais/playlist.m3u8`,
        line: 2,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      }
    ]
  })
})

it('could parse playlist with user agent and referer in the url string', () => {
  expect(parser.parse(content('tests/__data__/pipe.m3u'))).toStrictEqual({
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
  })
})

it('could parse playlist with url-tvg in header', () => {
  expect(parser.parse(content('tests/__data__/url_tvg.m3u'))).toStrictEqual({
    header: {
      attrs: {
        'url-tvg': 'http://195.154.221.171/epg/guidealbania.xml.gz'
      },
      raw: '#EXTM3U url-tvg="http://195.154.221.171/epg/guidealbania.xml.gz"'
    },
    items: [
      {
        name: 'Agromais',
        tvg: {
          id: 'Agromais.br',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: 'Entertainment'
        },
        http: {
          referrer: '',
          'user-agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
        },
        url: 'https://agromais/playlist.m3u8',
        raw: `#EXTINF:-1 tvg-id="Agromais.br" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148" group-title="Entertainment",Agromais\r\nhttps://agromais/playlist.m3u8`,
        line: 2,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      }
    ]
  })
})

it('could parse playlist with duplicates', () => {
  expect(parser.parse(content('tests/__data__/duplicate.m3u'))).toStrictEqual({
    header: {
      attrs: {
        'url-tvg': 'http://195.154.221.171/epg/guidealbania.xml.gz'
      },
      raw: '#EXTM3U url-tvg="http://195.154.221.171/epg/guidealbania.xml.gz"'
    },
    items: [
      {
        name: 'Agromais',
        tvg: {
          id: 'Agromais.br',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: 'Entertainment'
        },
        http: {
          referrer: '',
          'user-agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
        },
        url: 'https://agromais/playlist.m3u8',
        raw: `#EXTINF:-1 tvg-id="Agromais.br" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148" group-title="Entertainment",Agromais\r\nhttps://agromais/playlist.m3u8`,
        line: 2,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      },
      {
        name: 'Agromais',
        tvg: {
          id: 'Agromais.br',
          name: '',
          logo: '',
          url: '',
          rec: ''
        },
        group: {
          title: 'Entertainment'
        },
        http: {
          referrer: '',
          'user-agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
        },
        url: 'https://agromais/playlist.m3u8',
        raw: `#EXTINF:-1 tvg-id="Agromais.br" user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148" group-title="Entertainment",Agromais\r\nhttps://agromais/playlist.m3u8`,
        line: 4,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      }
    ]
  })
})

it('can parse playlist with #KODIPROP', () => {
  expect(parser.parse(content('tests/__data__/kodi.m3u'))).toStrictEqual({
    header: {
      attrs: {
        'x-tvg-url': 'https://github.com/LITUATUI/M3UPT/raw/main/epg/epg-vodafone.xml.gz'
      },
      raw: `#EXTM3U x-tvg-url="https://github.com/LITUATUI/M3UPT/raw/main/epg/epg-vodafone.xml.gz"`
    },
    items: [
      {
        name: 'RTP 1',
        tvg: {
          id: 'rtp1hd.tv.vodafone.pt',
          name: '',
          logo: 'https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP1.png',
          url: '',
          rec: ''
        },
        group: {
          title: 'TV'
        },
        http: {
          referrer: '',
          'user-agent': 'RTP Play/2.0.26 (Linux;Android 11) ExoPlayerLib/2.11.8'
        },
        url: 'https://streaming-live.rtp.pt/liverepeater/rtpClean1HD.smil/playlist.m3u8',
        raw: `#EXTINF:-1 group-title="TV" tvg-id="rtp1hd.tv.vodafone.pt" tvg-logo="https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/RTP1.png",RTP 1\r\n#KODIPROP:inputstream=inputstream.adaptive\r\n#KODIPROP:inputstream.adaptive.manifest_type=hls\r\nhttps://streaming-live.rtp.pt/liverepeater/rtpClean1HD.smil/playlist.m3u8|user-agent=RTP Play/2.0.26 (Linux;Android 11) ExoPlayerLib/2.11.8`,
        line: 7,
        timeshift: '',
        catchup: {
          type: '',
          source: '',
          days: ''
        }
      }
    ]
  })
})

function content(filepath) {
  return fs.readFileSync(path.resolve(filepath), {
    encoding: 'utf8'
  })
}
