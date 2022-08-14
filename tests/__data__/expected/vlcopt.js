export default {
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
}
