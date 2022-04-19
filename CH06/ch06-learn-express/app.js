const express = require('express');     // express 모듈 임포트
const path = require('path');

const app = express();      // 웹서버 객체를 생성
app.set('port', process.env.PORT || 3000);
// 디폴트 300, precess.env.PORT가 ''이 아니면 process.env.PORT 값으로 결정

// 미들웨어 구현
app.use((req,res,next) => {
    console.log("모든 요청에 대해 처리하는 미들웨어 작성");
    // next(); // next가 없으면 다음으로 넘어 가지 않는다.
    },
    (req,res) => {

    }
)


app.get('/', (req, res) => {
    // res.send('Hello, Express');
    // req에 대한 res를 함
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    // res.send('Hello, Express');
    // req에 대한 res를 함
    console.log(app.get('port'), '번 포트에서 대기 중');
});