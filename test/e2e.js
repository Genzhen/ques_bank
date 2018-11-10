
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.className('btn')).click();
  } finally {
    await driver.quit();
  }
})();













// const webdriver = require('selenium-webdriver');
// const By = webdriver.By;
// const driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();
// driver.get('http://localhost:3000/index')
//     .then(function () {
//         driver.findElement(By.id('pramise_count')).click();
//         // driver.executeScript(`var url=$('.imgrow img').attr('src');console.log(url);window.open(url);`)
//     }).catch(function (e) {
//         console.log(e);
//     });








//jasmine-node
// describe('查看按钮点击返回json数据', function () {
//     it('should be on correct page', function () {
//         driver.get('http://localhost:3000/index');
//         driver.getTitle().then(function (title) {
//             console.log(title);
//             expect(title).toBe('图书馆管理系统');
//             done();
//         });
//     });
// })