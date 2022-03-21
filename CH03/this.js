console.log(this);
console.log(this === module.exports);  // true
console.log(this === exports);  // true

// function whatIsThis() { // 일반 함수 정의
//     // this: global 객체가 된다.
//     console.log('function', this === exports, this === global);
// }
// whatIsThis();

// const whatIsThis = () => {
//
// };
// whatIsThis()

(() => {
    console.log('arrow function', this === exports, this === global);
})();