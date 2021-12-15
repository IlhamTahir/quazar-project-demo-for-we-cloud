import { get } from './requst'

export const sayHello = () => {
    return get('/hello')
}