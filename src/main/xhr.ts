import { AxiosRequestConfig } from './types/request'

export default function xhr (config: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data = null } = config

    const request = new XMLHttpRequest()
    request.open(method.toLocaleUpperCase(), url, true)
    request.send(data)
  })
}
