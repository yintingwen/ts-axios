import axios from '../main/index'

// 数组
axios({
  url: '/api/query',
  params: {
    list: [1, 2, 3]
  }
})

// 对象
axios({
  url: '/api/query',
  params: {
    obj: {
      a: 1,
      b: 2
    }
  }
})

// Date
axios({
  url: '/api/query',
  params: {
    date: new Date()
  }
})

// 普通值
axios({
  url: '/api/query',
  params: {
    a: 1, b: 2
  }
})

// params非对象
axios({
  url: '/api/query',
  params: '12312'
})
