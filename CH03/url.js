const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// URL 클래스의 객체 생성 - WHATWG 방식
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
// format(객체): 반환 - 문자열
console.log('------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// parse(문자열): 반환 - 객체(old style)
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));