import axios from 'axios'
const token = localStorage.getItem('token')

const customApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

customApi.interceptors.request.use(config => {
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
})

export default customApi