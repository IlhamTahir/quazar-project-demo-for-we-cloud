import {get} from './requst'

export const sayHello = () => {
    return get('https://yili-music-1479251-1308655658.ap-shanghai.run.tcloudbase.com/get')
}