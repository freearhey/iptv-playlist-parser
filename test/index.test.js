import parser from '../src'

it('parse playlist', () => {
  const playlist = `
    #EXTM3U x-tvg-url="http://195.154.221.171/epg/guidealbania.xml.gz"
    #EXTINF:-1 tvg-ID="CH1" tvg-name="Ch 1" tvg-language="English" tvg-country="US" tvg-logo="http://www.rtvchannel.com.au/wp-content/uploads/2017/04/xshow_08.png,Mic_.2KNN9OHw1p.png.pagespeed.ce.2KNN9OHw1p.png" tvg-url="http://195.154.221.171/epg/guide.xml.gz" group-title="Music",Channel 1 (Tested)
    #EXTGRP:Только Android
    #EXTVLCOPT:http-referrer=http://player.livesports.pw/la2/
    #EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.25 Safari/537.36
    http://livestream.htp.tv/hls-live/livepkgr/_definst_/H1/H1_HQ.m3u8
    #EXTINF:16 tvg-id="CH2",Channel 2
stream/chunklist.m3u8

=========================sudan===================================
#EXTM3U
#EXTINF:1,=>(★ TURKİYE ★)<=

http://wodpro24.tr4545.in:8080/expred/peru8k.mp4
#EXTINF:1,TRT 1 HD
https://video-rvd-lmg.rnp.br/live/ocp(t(FfZfeFx3QG4)r(TOqkzw)a(ut273w)p(d(lCo)k(ow4)m(U1zbeMZOcvuVp_PjPC5VeA)n(a(-xL_Aw)s(yeg)'a(vuk2sg)s(3Rc)))s(s(2h8)b(OVsX9brZ0psZeMaQYt9O46THOxFsPHFB6R_YrLO_lAYLehFKlBcB3utUOhZjyWY7C52ngNY4Ow9Ook29TA)'s(gRY)b(iE9B80a6sOKUZn0UnLJQU_bKwqIDP29GWBxvJz1bQ1ihEmrOuDaUGTinW0l8unt4U9_v4jCwiAC2T6TOa8pgVRIAfsnYG9Y7VoI5EmwQ)'s(A4Q)b(ayZ0dwLn))m(0))/index.m3u8
#EXTINF: -1, name\r\nhttp://100.101.102.103:1000/index.m3u8\r\n
  `

  expect(parser.parse(playlist)).toStrictEqual({
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
          language: 'English',
          country: 'US',
          logo:
            'http://www.rtvchannel.com.au/wp-content/uploads/2017/04/xshow_08.png,Mic_.2KNN9OHw1p.png.pagespeed.ce.2KNN9OHw1p.png',
          url: 'http://195.154.221.171/epg/guide.xml.gz'
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
        raw:
          '#EXTINF:-1 tvg-ID="CH1" tvg-name="Ch 1" tvg-language="English" tvg-country="US" tvg-logo="http://www.rtvchannel.com.au/wp-content/uploads/2017/04/xshow_08.png,Mic_.2KNN9OHw1p.png.pagespeed.ce.2KNN9OHw1p.png" tvg-url="http://195.154.221.171/epg/guide.xml.gz" group-title="Music",Channel 1 (Tested)\n    #EXTGRP:Только Android\n    #EXTVLCOPT:http-referrer=http://player.livesports.pw/la2/\n    #EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.25 Safari/537.36\n    http://livestream.htp.tv/hls-live/livepkgr/_definst_/H1/H1_HQ.m3u8'
      },
      {
        name: 'Channel 2',
        tvg: {
          id: 'CH2',
          name: '',
          language: '',
          country: '',
          logo: '',
          url: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'stream/chunklist.m3u8',
        raw: `#EXTINF:16 tvg-id="CH2",Channel 2\nstream/chunklist.m3u8\n\n=========================sudan===================================\n#EXTM3U`
      },
      {
        name: '=>(★ TURKİYE ★)<=',
        tvg: {
          id: '',
          name: '',
          language: '',
          country: '',
          logo: '',
          url: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'http://wodpro24.tr4545.in:8080/expred/peru8k.mp4',
        raw: `#EXTINF:1,=>(★ TURKİYE ★)<=\n\nhttp://wodpro24.tr4545.in:8080/expred/peru8k.mp4`
      },
      {
        name: 'TRT 1 HD',
        tvg: {
          id: '',
          name: '',
          language: '',
          country: '',
          logo: '',
          url: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url:
          "https://video-rvd-lmg.rnp.br/live/ocp(t(FfZfeFx3QG4)r(TOqkzw)a(ut273w)p(d(lCo)k(ow4)m(U1zbeMZOcvuVp_PjPC5VeA)n(a(-xL_Aw)s(yeg)'a(vuk2sg)s(3Rc)))s(s(2h8)b(OVsX9brZ0psZeMaQYt9O46THOxFsPHFB6R_YrLO_lAYLehFKlBcB3utUOhZjyWY7C52ngNY4Ow9Ook29TA)'s(gRY)b(iE9B80a6sOKUZn0UnLJQU_bKwqIDP29GWBxvJz1bQ1ihEmrOuDaUGTinW0l8unt4U9_v4jCwiAC2T6TOa8pgVRIAfsnYG9Y7VoI5EmwQ)'s(A4Q)b(ayZ0dwLn))m(0))/index.m3u8",
        raw: `#EXTINF:1,TRT 1 HD\nhttps://video-rvd-lmg.rnp.br/live/ocp(t(FfZfeFx3QG4)r(TOqkzw)a(ut273w)p(d(lCo)k(ow4)m(U1zbeMZOcvuVp_PjPC5VeA)n(a(-xL_Aw)s(yeg)'a(vuk2sg)s(3Rc)))s(s(2h8)b(OVsX9brZ0psZeMaQYt9O46THOxFsPHFB6R_YrLO_lAYLehFKlBcB3utUOhZjyWY7C52ngNY4Ow9Ook29TA)'s(gRY)b(iE9B80a6sOKUZn0UnLJQU_bKwqIDP29GWBxvJz1bQ1ihEmrOuDaUGTinW0l8unt4U9_v4jCwiAC2T6TOa8pgVRIAfsnYG9Y7VoI5EmwQ)'s(A4Q)b(ayZ0dwLn))m(0))/index.m3u8`
      },
      {
        name: ' name',
        tvg: {
          id: '',
          name: '',
          language: '',
          country: '',
          logo: '',
          url: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'http://100.101.102.103:1000/index.m3u8',
        raw: `#EXTINF: -1, name\r\nhttp://100.101.102.103:1000/index.m3u8`
      }
    ]
  })
})

it('could parse playlist with comments', () => {
  const playlist = `   
#EXTM3U
================morocco================================================================
#EXTINF:-1,tamazight tv8
http://cdn-hls.globecast.tv/live/ramdisk/tamazight_tv8_snrt/hls_snrt/index.m3u8
  `

  expect(parser.parse(playlist)).toStrictEqual({
    header: {
      attrs: {},
      raw:
        '#EXTM3U\n================morocco================================================================'
    },
    items: [
      {
        name: 'tamazight tv8',
        tvg: {
          id: '',
          name: '',
          language: '',
          country: '',
          logo: '',
          url: ''
        },
        group: {
          title: ''
        },
        http: {
          referrer: '',
          'user-agent': ''
        },
        url: 'http://cdn-hls.globecast.tv/live/ramdisk/tamazight_tv8_snrt/hls_snrt/index.m3u8',
        raw:
          '#EXTINF:-1,tamazight tv8\nhttp://cdn-hls.globecast.tv/live/ramdisk/tamazight_tv8_snrt/hls_snrt/index.m3u8'
      }
    ]
  })
})

it('could parse playlist with #EXTGRP and #EXTVLCOPT tag', () => {
  const playlist = `
#EXTM3U
#EXTINF:0 tvg-name="TestChannel" group-title="Entertainment",Test Channel
#EXTGRP:News
#EXTVLCOPT:http-user-agent="Dalvik/2.1.0 (Linux; U; Android 6.0.1;)"
http://test.channel.com/iptv/secret/1/index.m3u8`

  expect(parser.parse(playlist)).toStrictEqual({
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
          language: '',
          country: '',
          logo: '',
          url: ''
        },
        group: {
          title: 'News'
        },
        http: {
          referrer: '',
          'user-agent': 'Dalvik/2.1.0 (Linux; U; Android 6.0.1;)'
        },
        url: 'http://test.channel.com/iptv/secret/1/index.m3u8',
        raw:
          '#EXTINF:0 tvg-name="TestChannel" group-title="Entertainment",Test Channel\n#EXTGRP:News\n#EXTVLCOPT:http-user-agent="Dalvik/2.1.0 (Linux; U; Android 6.0.1;)"\nhttp://test.channel.com/iptv/secret/1/index.m3u8'
      }
    ]
  })
})
