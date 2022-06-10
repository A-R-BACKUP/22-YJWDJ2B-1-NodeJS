# Express SNS(nodebird) 작성
* twitter 처럼 팔로워 팔로잉 가능한 140문자만 작성할 수 있는 sns구현

## 9.1 프로젝트 세팅
1) npm i express-generator
2) npx express -v pug nodebirdTest<!-- project이름 -->
3) cd nodeBirdTest로 이동
4) package.json확인
   dependencie의 pug 부분 삭제
   scripts의 start부분 : node --> nodemon
5) npm i
6) npm i express-session multer<!-- file업로드 --> nunjucks <!-- html -->
7) npm i dotenv
8) npm i -D nodemon
9) npm i sequelize mysql2 sequelize-cli
10) npx sequelize init
11) config/config.json 수정
    "development": {
    "username": "root", <!-- 수정 할수도 있어야 한다. -->
    "password": "oracle", <!-- 수정 -->
    "database": "nodebirdtest", <!-- 수정 -->
    "host": "127.0.0.1",
    "dialect": "mysql"
    },
12) npx sequelize db:create <!-- db생성 여부 확인-->
13) view 엔진 수정 <!-- app.js에서 수정 -->
    const nunjucks = require
    app.set('view engine', 'html');
    nunjucks.configure('views', {
    express: app,
    watch: true,
    });
    14)sequelize import
    sequelize.sync({ force: false })
    .then(() => {
    console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
    console.error(err);
    });
16) npm start : 뷰 설정과 DB 설정 확인

17) app.js 수정 : 세션관리, .env 파일 처리 등

18) route/page.js작성
19) app.js page router 설정
20) view세팅
21) npm start
22) http://localhost:4500/
## 9.1-1
* Rest API 분석
1) /
   GET {} main.html
   {title:"NodeBird",twits:[{content:'',img:'',...},...] }

2) /join
   GET {req.body} join.html
   {title: "회원가입-nodeBird"}

3) /hashtag?hashtag="해시태그 검색어"
   GET {req.query.hashtag} main.html
   {title: `${해시태그 검색어} NodeBird`}

4) /auth/join
   POST {email, nick, password}
1) Api로 이동 : 성공한 여부 /
1) API로 이동 : redirect(서옹한경우 - / , 실패한 경우 - join)

5) /auth/login
   POST {email, password}
1) 성공한 경우 GET / 으로 이동 1) API)
   실패하면 /?loginError =  비밀번호가%20일치하지%20않습니다
   으로 이동 (1)API)

6) /auth/logout
   GET {}
   성공한 경우 GET /으로 이동 1) API)

7) /post
   post{contec :'}, img:"",userid : '로그인 하십시오
   성공 GET / 으로 이동 (1) pi

8) /POST/img
   post multer처리
   결과 : res.json({url : '/img/'})

9) /profile
   GET {로그인사용자정보} profile.html

10) /user/:id/follow
    POST {userid, id}
    res.json({success})


npx sequelize model:generate --name User --attributes email:string, nick:string,password:string,provider:string,snsId:string

npx sequelize model:generate --name Post --attributes content:string,img:string

Hashtag

npx sequelize model:generate --name Hashtage --attributres title:string


## 9.3 Passport모듈이용 로그인 구현

* 로그인 처리 방법
* 1) 직접 구현
* 2) 검증 방법 이용: 0Auth, 구글, 네이버, 카카오, 페북, 깃허브
* 3)

24) 모듈 설치
    npm i passport passport-local passport-kakao bcrypt

* passport 모듈에서 로그인 처리 순서