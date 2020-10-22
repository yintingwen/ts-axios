import { parseHeaders } from './helper/header'
import { AxiosRequestConfig } from './types/request'
import { AxiosPromise, AxiosResponse } from './types/response'

export default function xhr (config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data = null, headers, responseType } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    request.open(method.toLocaleUpperCase(), url, true)

    request.onreadystatechange = () => {
      if (request.readyState !== 4) return

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType === 'text' ? request.responseText : request.response
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusTest: request.statusText,
        headers: responseHeaders,
        config,
        request
      }

      resolve(response)
    }

    Object.keys(headers).forEach(key => {
      request.setRequestHeader(key, headers[key])
    })

    request.send(data)
  })
}
