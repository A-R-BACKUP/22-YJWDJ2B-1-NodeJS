const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => { // deprecated 시킬 함수
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!'); // deprecated 되는 함수 호출시 출력될 내용.
/*
const dontUseMe = (x, y) => { // 원래 deprecated 되기 전
    console.log(x + y);
},
*/
dontUseMe(1, 2);


const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });