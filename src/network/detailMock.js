import { requestMock } from './requestMock';

export function getDetailMock(type) {
    return requestMock({
        url: '',
        params: {
            type
        }
    })
}

export class Goods {
    constructor(itemInfo) {
        this.title = itemInfo.title
        this.oldPrice = itemInfo.oldPrice
        this.newPrice = itemInfo.newPrice
        this.cfav = itemInfo.cfav
        this.discountDesc = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.services = itemInfo.services
        this.columns = itemInfo.columns
        this.image = itemInfo.image
        this.iid = itemInfo.iid
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.shopName;
        this.fans = shopInfo.shopFans;
        this.sells = shopInfo.shopSells;
        this.score = shopInfo.shopScore;
        this.goodsCount = shopInfo.shopGoodsCount;
    }
}