const Mock = require('mockjs')
// 许要军2022.08.04 参考 ：https://www.cnblogs.com/lahm8963/p/15545412.html
const data = Mock.mock({
    'items|30': [{
        id: '@id',
        title: '@sentence(10,20)',
        'status|10': ['published', 'draft', 'deleted'],
        author: 'name',
        display_time: '@datetime',
        pageviews: '@integer(300,5000)'
    }]
});

module.exports = [{
    url: '/table/list',
    type: 'get',
    Response: config => {
        const items = data.items
        return {
            code: 20000,
            data: {
                total: items.length,
                items: items
            }
        }
    }
}]
