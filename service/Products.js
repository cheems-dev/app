import api from './Api'

const getProducts = () => {
  const response = api
    .get('/api/productos')
    .then((resolve) => resolve.data)
    .then((resolve) => resolve.data)

  return response
}

export { getProducts }
