const url = require('url');
// old style url 객체
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
// parsedUrl.query === 'page=3&limit=10&category=nodejs&category=javascript'
// query: 객체
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));
// stringify(객체): format()과 유사, 문자열로 반환