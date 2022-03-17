const { odd, even } = require('./var');
// 구조 분해 할당
// require(사용할 모듈의 경로) -- 확장자는 생략 가능
// const odd = require('./var').odd;
// const odd = require('./var').even
function checkOddOrEven(num) {

    if (num % 2) { // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;