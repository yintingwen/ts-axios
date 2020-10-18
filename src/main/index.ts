import { buildURL } from './helper/url'
import { AxiosRequestConfig } from './types/request'
import xhr from './xhr'
import { transformRequest } from './helper/data'

function axios (config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

/**
 * 处理请求配置
 * @param config
 */
function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config)
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

export default axios
