import parser from '../src'

it('parse playlist', () => {
  const playlist = `
    #EXTM3U x-tvg-url="http://195.154.221.171/epg/guidealbania.xml.gz"
    #EXTINF:-1 tvg-ID="CH1" tvg-name="Ch 1" tvg-language="English" tvg-country="US" tvg-logo="https://i.imgur.com/LcJZVV5.png" tvg-url="http://195.154.221.171/epg/guide.xml.gz" group-title="Music",Channel 1 (Tested)
    http://livestream.htp.tv/hls-live/livepkgr/_definst_/H1/H1_HQ.m3u8
    #EXTINF:16 tvg-id="CH2",Channel 2
    stream/chunklist.m3u8
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
          logo: 'https://i.imgur.com/LcJZVV5.png',
          url: 'http://195.154.221.171/epg/guide.xml.gz'
        },
        group: {
          title: 'Music'
        },
        url: 'http://livestream.htp.tv/hls-live/livepkgr/_definst_/H1/H1_HQ.m3u8',
        raw: '#EXTINF:-1 tvg-id="CH1" tvg-name="Ch 1" tvg-language="English" tvg-country="US" tvg-logo="https://i.imgur.com/LcJZVV5.png" tvg-url="http://195.154.221.171/epg/guide.xml.gz" group-title="Music",Channel 1 (Tested)\nhttp://livestream.htp.tv/hls-live/livepkgr/_definst_/H1/H1_HQ.m3u8'
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
        url: 'stream/chunklist.m3u8',
        raw: '#EXTINF:16 tvg-id="CH2",Channel 2\nstream/chunklist.m3u8'
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
      raw: '#EXTM3U'
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
        url: 'http://cdn-hls.globecast.tv/live/ramdisk/tamazight_tv8_snrt/hls_snrt/index.m3u8',
        raw: '#EXTINF:-1,tamazight tv8\nhttp://cdn-hls.globecast.tv/live/ramdisk/tamazight_tv8_snrt/hls_snrt/index.m3u8'
      }
    ]
  })
})