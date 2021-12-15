import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.example.com'
});
const { get, post, put } = instance

export { get, post, put }
