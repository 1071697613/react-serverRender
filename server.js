//import Koa from 'koa'
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const App = require('./dist/main.js');

//const app = new Koa()

// response
// app.use(ctx => {
//   let str = renderToString(<App />)

//   ctx.body = str
// })

//app.listen(3000)

//console.log('系统启动，端口：8080')
const data = [{
    key: '1',
    name: 'A',
    age: 32,
    tel: '0571-22098909'
  }, {
    key: '2',
    name: 'A',
    age: 12,
    tel: '0571-22098333'
  }, {
    key: '3',
    name: 'B',
    age: 32,
    tel: '0575-22098909'
  }, {
    key: '4',
    name: 'B',
    age: 18,
    tel: '0575-22098909'
  }, {
    key: '5',
    name: 'B',
    age: 18,
    tel: '0575-5'
  }, {
    key: '6',
    name: 'C',
    tel: '0571-6',
    age: 12
  }, {
    key: '7',
    name: 'C',
    tel: '0571-7',
    age: 19
  }, {
    key: '8',
    name: 'C',
    tel: '0571-6',
    age: 12
  }, {
    key: '9',
    name: 'C',
    tel: '0571-7',
    age: 19
  }];
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    mergeAbove: true
  }, {
    title: 'Age',
    dataIndex: 'age',
    mergeAbove: true
  }, {
    title: 'Home phone',
    dataIndex: 'tel',
  }];
console.log(renderToStaticMarkup(App.default({data:data,columns:columns,pagination:false})));