export default [
  {
    url: '/api-dev/users',
    method: 'get',
    response: req => {
      return {
        code: 0,
        data: [{name: 'Tom', id: 1}, {name: 'Jeff', id: 2}]
      }
    }
  }
]