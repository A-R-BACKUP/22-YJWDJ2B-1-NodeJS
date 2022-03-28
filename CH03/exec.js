//const exec = require('child_process').exec;
const { exec } = require('child_process');

var process = exec('ls');
//dos => dir, linux => ls shell 명령어


process.stdout.on('data', function(data) {
    // stdout: 표준출력 - 모니터
    // stdin: 표준입력 - 키보드
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러