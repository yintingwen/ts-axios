import { isPlainObject } from './util'

function normalizeHeaderName (headers: any, targetName: string): any {
  Object.keys(headers).forEach(name => {
    if (name.toUpperCase() === targetName.toUpperCase()) {
      headers[targetName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders (headers: any, data: any): any {
  // 是JSON数据
  if (isPlainObject(data)) {
    // 格式化字段名，并判断添加默认值
    normalizeHeaderName(headers, 'Content-Type')
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  // body为null和undefined代表彻底没数据，就删除Content-Type字段
  if (data === null || data === undefined) {
    delete headers['Content-Type']
  }

  return headers
}

export function parseHeaders (headers: string): any {
  const parsed: any = {}
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(item => {
    let [key, value] = item.split(':')
    key = key.toLowerCase().trim()
    if (!key) return
    value = value ? value.trim() : value
    parsed[key] = value
  })

  return parsed
}
