import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_HOST
});
const { get, post, put } = instance

export { get, post, put }
