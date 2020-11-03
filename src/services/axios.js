import axios from 'axios'

const axiosApp = axios.create({
  baseURL:'https://backend-coodesh.herokuapp.com'
})

export default axiosApp