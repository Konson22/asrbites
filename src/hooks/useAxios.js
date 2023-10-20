import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL:process.env.REACT_APP_PROD_URL,
  // baseURL:process.env.REACT_APP_LOCAL_URL,
  baseURL:'https://leee3-api.onrender.com/'
})
export default axiosInstance

