import { isDate, isPlainObject } from './util'

/**
 * 拼接URL和参数，判断参数值得类型，做不同的处理
 *    undefined和null就不携带
 *    数组 => key[]=元素1&key[]=元素2
 *    对象 => 直接转为json
 * 参数名和参数值都进行encode编码
 *    @ $ : , + [ ]不进行编码
 * 删除url中的hash部分
 * @param url url
 * @param params 参数
 */
export function buildURL (url: string, params?: any): string {
  if (!params || !isPlainObject(params)) {
    return url
  }

  const parts: any[] = []

  Object.keys(params).forEach(key => {
    let value = params[key]

    if (value === null || value === undefined) {
      return
    }

    if (Array.isArray(value)) {
      key += '[]'
    } else {
      value = [value]
    }

    value.forEach((item: any) => {
      if (isDate(item)) {
        item = item.getTime()
      }
      if (isPlainObject(item)) {
        item = JSON.stringify(item)
      }
      parts.push(`${encode(key)}=${encode(item)}`)
    })
  })

  url = url.split('/#')[0]

  if (parts.length) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + parts.join('&')
  }

  return url
}

function encode (val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
}
