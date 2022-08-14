export default {
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
}
