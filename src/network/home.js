import { request } from './request';
import { requestMock } from './requestMock';
import axios from 'axios'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

// export function getHomeGoods(type, page) {
//     return request({
//         url: '/home/data',
//         params: {
//             type,
//             page
//         }
//     })
// }
export function getAllData(type) {
    return requestMock({
        url: '',
        params: {
            type
        }
    })
}