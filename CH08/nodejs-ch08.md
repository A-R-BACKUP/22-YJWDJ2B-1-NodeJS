[//]: # (진짜 몰겠다... ZeroCho 참고....)
## 8 MongoDB
- NOSQL DB
  - 특징
    - 자유로운 데이터 입력
    - Join 미지원
    - 확장성, 가용성
    - 용어
      - 컬렉션 (테이블)
      - 다큐먼트 (로우)
      - 필드 (컬럼)

- SQL vs NOSQL (NOT ONLY SQL)

### Mongoose(몽구스): Sequelize 역활
- MySQL(MariaDB): MongoDB = Sequelize:Mongoose
  - Sequelize: ORM(Object Relational Mapping) 라이벌
  - Mongoose: ODM(Object Document Mapping)
- Schema 개념 사용 관리
  - 데이터에 타입을 정의
- Join과 유사한 기능 추가: populate라는 메소드
- 프로미스 문법 사용가능, 쿼리 빌더 사용가능


### 프로젝트 작성 
- 1 ) 7장 프로젝트 복사
- 2 ) npm i
- 3 ) 필요없는 자료 삭제
  - config, migrations, seeders, models 폴더 삭제
- 4 ) 필요 없는 라이브러리 삭제
  - npm uninstall sequelize sequelize-cli mysql2
- 5 ) 필요한 라이브러리 설치
  - npm i mongoose@5.9.10
- 6 ) Schema 폴더
- 7 ) index.js 작성: 몽고 DB 연결
- 8 ) app.js에 몽고디비 연결 코드 작성
- 9 ) 스키마 정의: 381페이지, 382페이지
- 