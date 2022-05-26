## 9. Express SNS(nodebird) 사용
- twitter 처럼 팔로워 팔로잉 가능한 140 문자만 작성할 수 있는 SNS 구현
### 9.1 프로젝트 세팅
- 1 . npm i express-generator
- 2 . npx express -v pug nodebirdTest
- 3 . cd nodebirdTest
- 4 . package.json
  - dependencies의 pug 부분 삭제, scripts start 부분: node --> nodemon
- 5 . npm i
- 6 . npm i express-session multer nunjucks
- 7 . npm i dotenv
- 8 . npm i -D nodemon
- 9 . npm i sequelize mysql2 sequelize-cli
- 10 . npx sequelize init
- 11 . config/config.json 수정한다. 패스워드, 데이터베이스 이름 등.
  ```js
  {
  "development": {
  "username": "root", // 수정
  "password": "nodetest", // 수정
  "database": "nodebirdTest", // 수정
  "host": "127.0.0.1",
  "dialect": "mysql"
  }
  
- 12 . npx sequelize db:create
  - --> nodebirdTest db 생성여부확인
- 13 . view 엔진 수정
- 14 . sequelize 설정
  ```js
  sequelize.sync({ force: false })
  .then(() => {
  console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
  console.error(err);
  });
  ```
- 16 . npm start : 뷰설정과 DB 설정 확인
- 17 . app.js 수정 : 세션관리, env 파일 처리 등

### 9.1-1
- REST API 분석
- 1 . /
  ```js
  GET {} main.html
  {title:"",twits:[{content:'',img:'',...}...]}
  ```
- 2 . /join
  ```js
  GET {} main.html
  {title:"회원가입 - Nodebird"}
  ```
- 3 . /hashtag?hashtag=해시태그검색어
  ```js
  GET req.query.hashtag main.html
  {title:`${해시태그검색어} NodeBird`}
  ```
- 4 . /auth/join
  ```js
  POST{email, nick, pw}
  // 1;oooooooooooooooooooooooooooooo;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddv;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ```''lk