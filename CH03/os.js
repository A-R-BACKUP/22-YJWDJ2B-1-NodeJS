const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch()); // cpu 종류
console.log('os.platform():', os.platform()); // os 종류
console.log('os.type():', os.type()); // os type
console.log('os.uptime():', os.uptime()); // os 시작 후 경과시간
console.log('os.hostname():', os.hostname()); // 컴퓨터 이름
console.log('os.release():', os.release()); // os 버전

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir()); // 홈 디렉토리
console.log('os.tmpdir():', os.tmpdir()); // 임시 저장 파일 경로

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus()); // cpu core 정보
console.log('os.cpus().length:', os.cpus().length); // core 갯수

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem()); // 사용가능 메모리
console.log('os.totalmem():', os.totalmem()); // 전제 메모리 용량