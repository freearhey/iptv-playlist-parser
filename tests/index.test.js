import parser from '../src'
import path from 'path'
import fs from 'fs'

it('parse playlist', done => {
  import('./__data__/expected/base.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/base.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

it('could parse playlist with comments', done => {
  import('./__data__/expected/comment.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/comment.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

it('could parse playlist with #EXTGRP and #EXTVLCOPT tag', done => {
  import('./__data__/expected/vlcopt.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/vlcopt.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

it('could parse playlist with user agent in attribute', done => {
  import('./__data__/expected/user_agent.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/user_agent.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

it('could parse playlist with user agent and referer in the url string', done => {
  import('./__data__/expected/pipe.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/pipe.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

it('could parse playlist with url-tvg in header', done => {
  import('./__data__/expected/url_tvg.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/url_tvg.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

it('could parse playlist with duplicates', done => {
  import('./__data__/expected/duplicate.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/duplicate.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

it('can parse playlist with #KODIPROP', done => {
  import('./__data__/expected/kodi.js')
    .then(({ default: expected }) => {
      expect(parser.parse(content('tests/__data__/input/kodi.m3u'))).toEqual(expected)
      done()
    })
    .catch(done)
})

function content(filepath) {
  return fs.readFileSync(path.resolve(filepath), {
    encoding: 'utf8'
  })
}
