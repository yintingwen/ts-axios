import { AxiosRequestConfig } from './request'

export interface AxiosResponse {
  data: any,
  status: number,
  statusTest: string,
  headers: any,
  config: AxiosRequestConfig,
  request: XMLHttpRequest
}

export type AxiosPromise = Promise<AxiosResponse>
