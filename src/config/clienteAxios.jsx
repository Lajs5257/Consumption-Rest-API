import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/jsonapi`
})
console.log(import.meta.env.VITE_BACKEND_URL);

export default clienteAxios;