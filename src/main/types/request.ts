export type RequestMethod = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE' | 'put' | 'PUT' | 'head' | 'HEAD' | 'options' | 'OPTIONS'

export interface AxiosRequestConfig {
  url: string
  method?: RequestMethod
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}
