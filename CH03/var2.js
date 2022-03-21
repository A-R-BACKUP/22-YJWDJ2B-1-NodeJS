// const odd ='홀수';
// const even = '짝수';
// exports = {  // 이렇게 하면 잠재적인 오류 발생 가능
//     odd, even,
// };

exports.odd = '홀수';
exports.even = '짝수';
console.log(module.exports === exports); //true