import jsonp from 'common/js/jsonp'
import { commonParams, options } from 'api/config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 200,
    pagenum: 1,
    g_tk: 1664029744,
    hostUin: 0,
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
8
export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    singermid: singerId,
    begin: 0,
    num: 100,
    songstatus: 1,
    platform: 'yqq',
    order: 'listen',
    needNewCode: 0,
    g_tk: 1664029744
  })
  return jsonp(url, data, options)
}
