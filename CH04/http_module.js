const http = require('http');

http.createServer(
    (req, res) => { // req: request객체, res: response 객체
        // if(req.url == '/users')
        res.writeHead(200, {'Content-type': 'text/html;charset=utf8'});

        res.write('<h1>안녕 일본반 여러분</h1>'); // 클라이언트로 전송, 응답 바디
        res.write('<h2>WDJ2 화이팅</h2>'); // 클라이언트로 전송, 응답 바디
        res.write('<span style="background-color:orange; color=black">안녕 일본반 여러분</span>');
        res.end('<div>완료</div>') // http 응답을 클라이언트로 전송

    }
) // http.Server 객체 생성
.listen( // 서버 실행 대기
    '8080', // 포트 번호
    ()=>{ // 서버 실행이 성공되면 호출
        console.log('8080 포트에서 서버 실행하여 요청 대기 중');
        console.log('http://localhost:8080/ 으로 요청 시도하세요.');
    }
);