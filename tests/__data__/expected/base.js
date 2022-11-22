export default {
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
      name: ' name,with comma',
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
      url: 'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/c/CongresodelaRepúblicadelPerúTVenvivo/live',
      raw: `#EXTINF: -1, name,with comma\r\nhttp://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/c/CongresodelaRepúblicadelPerúTVenvivo/live`,
      line: 17,
      timeshift: '',
      catchup: {
        type: '',
        source: '',
        days: ''
      }
    },
    {
      name: 'The Good, the Bad and the Ugly',
      tvg: {
        id: '',
        name: 'The Good, the Bad and the Ugly',
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
      url: 'movie.m3u8',
      raw: `#EXTINF: -1 tvg-name="The Good, the Bad and the Ugly",The Good, the Bad and the Ugly\r\nmovie.m3u8`,
      line: 19,
      timeshift: '',
      catchup: {
        type: '',
        source: '',
        days: ''
      }
    }
  ]
}
