## 6 Express
- Express, koa, hapi

### 6.1 익스프레이스 이용 프로젝트 시작
- 1 . ch06-learn-express 폴더 작성
- 2 . ch06-learn-express 폴더로 이동
- 3 . package.json 작성
  - npm init
- 4 . express 설치
  - npm i express
- 5 . nodemon 설치
  - npm i -D nodemon
    - nodemon app: 서버 수정이 발생하면 자동으로 재 시작해 주는 도구
    - 수동으로 재 시작하려고 하면 rs 입력
- 6 . app.js 작성
  - 교과서 230 쪽 참조
  - app.set(key,value): Key에 value 설정
  - app.get(key): key에 설정된 value를 리턴
  - app.get(url, callback)
    - get메소드로 url로 요청이 오면 callback 실행

- 7 . 서버 실행
  - nodemon app
  - npm start / npm run start
    
- res
  - res.writeHead()
  - res.write()
  - res.end()
  - res.send()
  - res.sendFile()

   
### 6.2 Middleware
- 미들웨어
  - 요청 - 미들웨어 - 응답
  - 요청 후 응답 전에 처리해야 할 기능을 구현한 모듈(패키지)
  - req객체를 이용하여 요청 정보를 알아내고 그에 필요한 기능을 처리하고 res객체를 이용해서 응답하도록 함.
  - 라우터, 에러핸들러도 일종의 미들웨어
  - app.use(미들웨어객체)
  - app.use(url, 미들웨어): url로 요청된 것에 대해 미들웨어 처리
  - 형태는 골백 함수 형태가 주로임
    - (req, res, next) => {}
    - req: 요청 정보
    - res: 응답
    - next: 다음 미들웨어 호출
  - 에러 핸들러는 다음과 같은 형태
    - (err, req, res, next) => {}
  - 사용 하려는 미들웨어의 설치
    - npm i morgan cookie-parser express-session
  - npm i dotenv
  
- dotenv
  - .env 파일 내용을 읽어서 process.env에 속성 추가 설정
  - .env 파일 내용
    - COOKIE_SECRET=cookiesecret
    - 키 = 값
  - dotenv 패키지에 의해
    - process.env.COOKIE_SECRET가 설정되어 사용 가능하게 됨
    - process.env.PORT  
    
#### 6.2.1 morgan
- 로그(Log) 처리 미들웨어 패키지
- 오셥에 따라 작동
  - dev: 개발 환경
    - [HTTP 요청 메서드] [URL] [HTTP status code] [응답 속도] - [응답 바이트]
  - combined: 배포 환경(실제 서비스)
  - common: 
  - short
  - tiny
   
#### 6.2.2 static
- 익스프레스 내장 미들웨어
  - app.use('요청 url',express.static('실제경로'));
  - http://localhost:3001/test/test.css
  - app.js의 폴더 (__dirname)/public/test/test.css
  
#### 6.2.3 body-parser
- express 버전 업그레이드로 일부 기능 내장 미들웨어 처리
  - express.json
  - express.urlencoded()
  - 요청 바디 정보가 req.body에 설정 됨
  - express.json
    - {name: '김영진', book:'node.js'}
    - req.body.name, req.body.book
  - express.urlencoded({extended:false})
    - name = 김영진&book=nodejs
    - req.body.name, req.body.book
    - extended: true
      - qs 모듈 이용 (따로 설치 해야 함)
    - extended: false
      - querystring 모듈 이용
      
- buffer 처리, text 처리 하려면... 
  - npm i body-parser 설치 후 처리해야 함
  - 교과서 p.238 참고
    
#### 6.2.4 cookie-parser
- 쿠키 처리용 미들웨어
- cookieParser(비밀키)ㄴ
- 요청 정보에서 쿠키 정보 알아내기
  - req.cookies 속성 사용가능
- 쿠키 생성
```js
   res.cookie(키, 값, 옵션)
   res.cookie('name', 'yjujit', {
   expire: new Date(Date.now()+9000000),
   httpOnly: true
   secure: true
   signed: true // --> req.signedCookies로 정보 이용가능
  })
```
- 쿠키 삭제
  - res.clearCookie(키, 값, 옵션)
  - 생성시와 키, 값, 옵션이 같아야 함.

#### 6.2.5 express-session
- 안전하게 사용하려면 cookie-parser 미들웨어 뒤에 작성할 것
- ㄴ