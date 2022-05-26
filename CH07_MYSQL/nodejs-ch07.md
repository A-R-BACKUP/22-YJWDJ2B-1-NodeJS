### 동영상 참조 7.5까지 연습하기


### 7.5 CRUD
- DB처리
  - C (create) : 생성
    - create문 / insert into
  - R (read) : 읽기 / 조회
    - select 문
  - U (update) : 수정
    - update ~ from
  - D (delete) : 삭제
    - delete 문
  - where, order by, offset, top, tail, group by

### 7.6 Sequelize 사용하기
- node에서의 ORM중 하나
  - 참고 TypeORM
  - Promise 기반 비동기 동작
  - DB의 종류와 상관없이 코드의 일관성 유지가능
  - SQL 문을 자동으로 작성해 주기 때문에, SQL에 대한 지식이 없어도 되고 자바스크립트로 DB의 CRUD 구현이 가능하다.
    - 최적화는 SQL로....

- ORM(Object-Relational-Mapping)
  - DB의 데이터를 사용하기 위해 Object로 매핑시켜주는 라이브러리

- Framework들에서 ORM 사용 중
  - jsp: Hibernate, iBatis, MyBatis, JPA
  - php: laravel - Eloquent ORM
  - python: Django - Django ORM, Flask-SQLAlchemy
  - node: Sequelize, TypeORM, Knex
- CLI로 sequelize 테스트 해보기
  - sequelize-sql 활용
  - 0 ) 프로젝트 폴더 생성
    - mkdir 7장-DB
  - 1 ) 프로젝트 폴더로 이동.
    - cd 
  - 2 ) sequelize의 모델 생성: 저자의 깃허브 참고
     - <models/index.js> 
     - <models/user.js>
     - <models/com,ent.js>
     - 관예: 모델 - 단수 v 테이블명 - 복수
  - 3 ) DB 연결 설정
    - <config/config.js>
  - 4 ) .env 파일
    - NODE_ENV = development
  - 5 ) npm init 으로 package.json 작성 후 패키지 모듈 설치 but 패키지 설치만 함
    - npm i sequelize sequelize-cli mysql2
    - npm i -D sequelize-sql
  - 6 ) config.json의 DB생성
    - npx sequelize db:create
  - 7 ) models 폴더의 모델에 대한 테이블 생성
    - <model2tablecreate.js> 생성
    - node model2tablcreate 실행
  - 8 ) .sequelize-sql 파일 생성 (프로젝트 폴더 (루트폴더) 내)
    - sequelize-sql 실행
  - 9 ) sqquelize-sql 실행
    - npx sequelize-sql
    
- Express, sequelize, nunjucks 이용
  - 1 ) project 폴더 생성
    - mkdir ch07MyWebApp
  - 2 ) project 폴더로 이동
  - 3 ) package.json 생성
    - npm init
  - 4 ) 사용 패키지 (모듈)을 설치
    - npm i express morgan nunjucks sequelize sequelize-cli mysql2
    - npm i -D nodemon
  - 5 ) sequelize project 생성
    - npx sequelize init
  - 6 ) config / config.json 수정 후 DB 생성
    - npx sequelize db:create
  - 7 ) MySQL 연결하기
    - model/index.js 수정: 316 페이지
    - app.js 생성: 317 페이지
  - 8 ) 모델 정의 하기
    - npx sequelize modelgenerate --name User -- attributes name:string,age:integer,married:boolean,command:text,created_at:date
    - npx sequelize model:generate --name Comment --attributes comment:string, created_at:date
  - 9 ) 모델 연결하기
    - models/index.js 수정
  - 10 ) 관계 정의
    - 모델의 associate()메소드 구현
     
- 관계 정의
  - 1:1
    - 사용자:사용자정보
    - 모델.hasOne(다른모델)
    - 다른모델.belongsTo(모델)
  - 1:N (1:다)
    - 사용자:게시글
    - 사용자:휴대전화정보
    - 부모:자식
    - 모델.hasMany(다른모델)
    - 다른모델.belongsTo(모델)
  - N:M (다:다)
    - 게시글:댓글?
    - 학교:학생?
    - 게시글:해시태그
    - 다른모델.belongsToMany(모델,{through:"테이블명"})
    - 모델.belongsToMany(모델,{through:"테이블명"})
    
    
- RESTful하게 코딩하기, SPA(Single Page Application): ajax : axios
  - method
  - url
  - request data
  - response data
  - 1 ) GET / 요청 --> 최초 접속시 표시 view
  - 짤림;