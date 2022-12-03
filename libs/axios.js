import axios from 'axios'

export const Axios = axios.create({
  baseURL: process.env.BASE_API_URL,
})


Axios.interceptors.response.use(
  function (response) {
    return response.data;
  },

  function (error) {
    const res = error.response

    if (res.status === 401) {
      // Перенаправлять если пользователь не зареган или не авторезирован
      
      window.location.href = 'https://vitalibrinkmann.com/'
    }

    console.error('Looks like there was a problem. Status Code:' + res.status)

    return Promise.reject(error)
  },
)

export default Axios
