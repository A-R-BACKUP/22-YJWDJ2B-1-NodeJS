const fs = require('fs');
fs.readFile( // 비동기적으로 작동, 처리 성공하면 콜백 함수 실행
    './Read_Me.txt', // 읽으려는 파일명
    (err, data) => { // err - 에러, data - 성공시 파일의 정보(버퍼타압)
        // Buffer: 8bits로 나타내는 메모리상의 데이터, 사람이 인지할 수 없음.
        if(err){
            throw err;
        }
        console.log(data);
        console.log(data.toString())
    }
)