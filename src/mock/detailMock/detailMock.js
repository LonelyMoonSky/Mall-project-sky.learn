const Mock = require("mockjs");
const Random = Mock.Random;

const detailData = function() {
    let articles = [];
    // let articles1 = [];
    let articles2 = [];
    let articles3 = [];

    // let newArticleObject0 = {
    //     title: Random.csentence(10, 30),
    //     price: Random.natural(99, 9999),
    //     cfav: Random.natural(0, 999),
    // }
    // articles1.push(newArticleObject0)

    let num1 = Math.floor(Math.random() * 10 + 2)
    for (let i = 0; i < num1; i++) {
        let newArticleObject1 = {
            topImages: Random.dataImage('500x500', '轮播图片' + Random.integer(1, 10)),
        }
        articles2.push(newArticleObject1)
    }

    for (let i = 0; i < 10; i++) {
        let newArticleObject2 = {
            image: Random.dataImage('300x400', '参数图片' + Random.integer(1, 20)),
        }
        articles3.push(newArticleObject2)
    }

    articles.push({ topImages: articles2, c: articles3 })

    return {
        data: articles
    }
}

Mock.mock('/user?type=detail', /post|get/i, detailData);