import axios from '../main'

axios({
  method: 'post',
  url: '/api/data',
  data: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/api/data/buffer',
  data: new Int32Array([21, 31])
})
