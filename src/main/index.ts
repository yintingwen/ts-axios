import { buildURL } from './helper/url'
import { AxiosRequestConfig } from './types/request'
import xhr from './xhr'
import { transformRequest } from './helper/data'
import { processHeaders } from './helper/header'
import { AxiosPromise } from './types/response'

function axios (config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

/**
 * 处理请求配置
 * @param config
 */
function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 * 转换url
 * @param config
 */
function transformURL (config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

/**
 * 转换请求体data
 * @param config
 */
function transformRequestData (config:AxiosRequestConfig):any {
  return transformRequest(config.data)
}

function transformHeaders (config:AxiosRequestConfig): any {
  const { headers = {}, data } = config

  return processHeaders(headers, data)
}

export default axios
