const Mock = require("mockjs");
const Random = Mock.Random;

const popData = function() {
    let articles = [];
    for (let i = 0; i < 30; i++) {
        let newArticleObject = {
            title: Random.csentence(10, 30),
            image: Random.dataImage('300x400', '流行的图片' + Random.integer(1, 99)),
            oldPrice: Random.natural(100, 999),
            newPrice: Random.natural(10, 99),
            cfav: Random.natural(0, 999),
            discountDesc: "活动价",
            discountBgColor: "#f13e3a",
            services: "7天无理由退货",
            columns: Random.natural(99, 99999),
            shopLogo: Random.dataImage('300x400', 'pop商家的LOGO' + Random.integer(1, 99)),
            shopName: Random.cname(),
            shopFans: Random.natural(100, 9999),
            shopSells: Random.natural(1000, 999999),
            shopScore: Random.natural(1, 10),
            shopGoodsCount: Random.natural(1, 10),
        }
        articles.push(newArticleObject)
    }
    return {
        data: articles
    }
}

Mock.mock('/user?type=pop', /post|get/i, popData);