const spawn = require('child_process').spawn;

var process = spawn('python3', ['test.py']);
// var process = spawn('python3', ['test.py'],{shell:true});
// 동일 폴더에 있는 test.py를 구동시킨다.

process.stdout.on('data', function(data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러