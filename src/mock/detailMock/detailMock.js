const Mock = require("mockjs");
const Random = Mock.Random;

const detailData = function() {
    let articles = [];
    let articles1 = [];
    let articles2 = [];
    let articles3 = [];
    let articles4 = [];

    for (let i = 0; i < 20; i++) {
        let newArticleObject0 = {
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
            shopGoodsCount: Random.natural(1, 10),
        }
        articles1.push(newArticleObject0)
    }

    let num1 = Math.floor(Math.random() * 10 + 2)
    for (let i = 0; i < num1; i++) {
        let newArticleObject1 = {
            topImages: Random.dataImage('500x500', '轮播图片' + Random.integer(1, 10)),
        }
        articles2.push(newArticleObject1)
    }

    for (let i = 0; i < 12; i++) {
        let newArticleObject2 = {
            image: Random.dataImage('400x500', '参数图片' + Random.integer(1, 20)),
        }
        articles3.push(newArticleObject2)
    }

    for (let i = 0; i < 10; i++) {
        let newArticleObject3 = {
            commentInfo: Random.cparagraph(1, 10),
        }
        articles4.push(newArticleObject3)
    }

    articles.push({ recommend: articles1, topImages: articles2, detailImages: articles3, commentInfo: articles4 })

    return {
        data: articles
    }
}

Mock.mock('/user?type=detail', /post|get/i, detailData);