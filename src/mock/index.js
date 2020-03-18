const Mock = require("mockjs");

Mock.setup({
    timeout: 0 - 300
})

Mock.mock('/user?type=pop', 'get', require('./homeMock/homeMockPop'));
Mock.mock('/user?type=new', 'get', require('./homeMock/homeMockNew'));
Mock.mock('/user?type=sell', 'get', require('./homeMock/homeMockSell'));

Mock.mock('/user?type=detail', 'get', require('./detailMock/detailMock'));