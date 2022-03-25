const crypto = require('crypto');

crypto.randomBytes(64,/* 바이트 길이 512bits */ (err, buf) => { // buf에 생성된 데이터 입력, buffer
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2(
        '비밀번호', // 암호화할 평문
        salt, // 소금: 음식의 소금처럼 평문에 추가
        100000, // 반복 횟수
        64, // key 길이
        'sha512', // 암호 해시함수
        (err, key) => { // key - 암호화된 문장
        console.log('password:', key.toString('base64'));
    });
});