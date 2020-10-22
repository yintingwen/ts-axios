import axios from '../main'

axios({
  method: 'post',
  url: '/api/body/json',
  data: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/api/body/json',
  headers: {
    'content-Type': 'application/json',
    accept: 'application/json, text/plain, */*'
  },
  data: {
    a: 3,
    b: 4
  }
})

axios({
  method: 'post',
  url: '/api/body/json',
  data: new URLSearchParams('q=URLUtils.search&topic=api')
})

axios({
  method: 'post',
  url: '/api/body/json',
  data: {
    a: 1,
    b: 2
  }
}).then(console.log)

axios({
  method: 'post',
  url: '/api/body/json',
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then(console.log)
