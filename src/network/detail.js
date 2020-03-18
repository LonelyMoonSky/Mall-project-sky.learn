import { request } from './request';

export function getDetail(id) {
    return request({
        url: '/detail',
        params: {
            id
        }
    })
}

// export class Goods {
//     constructor(itemInfo) {
//         this.title = itemInfo.title
//         this.oldPrice = itemInfo.oldPrice
//         this.newprice = itemInfo.newprice
//         this.cfav = itemInfo.cfav
//         this.discountDesc = itemInfo.discountDesc
//         this.discountBgColor = itemInfo.discountBgColor
//         this.services = itemInfo.services
//         this.columns = itemInfo.columns
//         this.image = itemInfo.image
//     }
// }