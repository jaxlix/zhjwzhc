// 测试IP
// const IP = 'http://50.64.102.101/ga/xinghuo-apaas-cloudsearch'
// 正式IP
const IP = 'http://47.96.19.54:8080'
export const api = {
  // 获取书籍列表
  findBooksOfPage: IP + '/webphone/bookPhone/findBooksOfPage',
  // 获取书架列表
  findBookshelfOfPage: IP + '/webphone/bookPhone/findBookshelfOfPage',
  // 书籍详情
  findBookById: IP + '/webphone/bookPhone/findBookById'
}
