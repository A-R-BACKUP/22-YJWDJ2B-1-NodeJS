const testcookie = `name${encodeURIComponent('김영진')};mytest=1234;japanit=kanbare`

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

console.log(parseCookies(testcookie));