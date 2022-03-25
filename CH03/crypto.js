const crypto = require('crypto');

// 메소드 체이닝
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
// 해시 알고리즘
// md5 - 128bits : 취약점 발견 됨
// SHA1 - 160bits : 취약점 발견 됨
// SHA256 - 256bits - 32bytes : 간당간당
// SHA512 - 512bits - 64bytes : 사용중, 간당
// SHA3 - 512bits

// update(암호화 하려는 평문)
// digest(인코딩코드): base64 encoding 많이 사용: 제일 짧아서
// digest meaning: 내용을 간단히 추려 적음. 또는, 그런 책·잡지 등의 저작물. 축약하다, 요약하다.

console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));