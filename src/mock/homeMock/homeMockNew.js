const Mock = require("mockjs");
const Random = Mock.Random;

const newData = function() {
    let articles = [];
    for (let i = 0; i < 30; i++) {
        let newArticleObject = {
            title: Random.csentence(10, 30),
            image: Random.dataImage('300x400', '新款的图片' + Random.integer(1, 99)),
            newPrice: Random.natural(100, 999),
            oldPrice: Random.natural(1000, 9999),
            cfav: Random.natural(0, 999),
            discountDesc: "今日特价",
            discountBgColor: "#f13e3a",
            services: "全国包邮",
            columns: Random.natural(99, 99999),
            shopLogo: Random.dataImage('80x80', 'newLOGO'),
            shopName: Random.cname(),
            shopFans: Random.natural(100, 9999),
            shopSells: Random.natural(1000, 999999),
            shopScore: Random.natural(1, 10),
            shopGoodsCount: Random.natural(1, 1000),
            iid: Random.natural(100000000, 999999999),
        }
        articles.push(newArticleObject)
    }
    return {
        data: articles
    }
}

Mock.mock('/user?type=new', /post|get/i, newData);