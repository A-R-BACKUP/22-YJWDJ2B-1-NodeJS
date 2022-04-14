## 5. 패키지 매니저

<br/>

### 5.1 npm
- node package manager
- 노드 패키지 관리자
- 공홈: https://www.npmjs.com
  - 방대한 양의 패키지, 대부분 오픈소스  <br/>
- 패키지(package)
  - npm 공홈에 업로드된 노드 모듈
  - 의존관계(dependency)가 발생하기 때문에 관리할 필요가 있음
    - 어떤 모듈(패키지)에서 다른 모듈을 사용  <br/>
- yarn: 페이스북에서 개발한 패키지 매니저
  - 공홈: https://yarnpkg.com/  <br/>
- 노드 프로젝트 시작 전에 프로젝트 폴더 내에 package.json 작성해야 함

<br/>

### 5.2 패키지의 관리
- package.json 작성
  - 두가지
    - 1 . npm init 명령 실행
      - 프로젝트 폴더 생성: mkdir ch05_npmtest
      - 프로젝트 폴더로 이동: cd ch05_npmtest
      - npm init 실행
    - 2 . package.json을 손수 작성
- 배포(deploy): 지적재산권, 라이센스
  - 상용: 구매하면 됨
  - 오픈소스: 무료
    - ISC/MIT/BSD: 무료, 사용한 출처와 라이센스를 표시
    - 아파치: 무료, 특허권에 대한 제한사항이 포함 되었을 가능성 있음
    - GPL: 무료, GPL 패키지를 사용했다면 배포시 GPL 라이센스로 배포해야하고 소스코드를 공개해야함
- npm run test
  - npm test
- npm run start
  - npm start
- npm run (package.json의 scripts 속성에 정의한 명령어)

- npm install 패키지명1 패키지명2 패키지명3....
  - npm i 패키지명1 패키지명2 패키지명3....
    - --save (생략 가능)
      - dependencies 속성이 package.json 속성에 추가
    - --save-dev (-D)
      - devDependencies 속성이 package.json에 추가
    - --global (-g)
      - npm설치된 폴더에 node_moudules 폴더가 생성되고 패키지들이 설치
      - npm i -g rimraf (rm -rf)
    - 프로젝트 폴더에 node_modules 폴더가 생성되고 패키지들이 설치됨
    - package-lock.json 파일 생성
      - 패키지 설치시 설치하는 패키지의 의존성 파악해서 관련패키지도 설치 할 수 있는 정보를 저장
-npm i -D nodemon
  - 서버를 다시 실행시 서버를 재시작해주는
- npm i express
  - 패키지 설치시 설치하는 패키지의 의존성 파악하여 관련 패키지도 설치 할 수 있는 정보를 저장.
- npm audit
- npm audit fix

- node_modules 폴더를 제외하고 레포트 제출해야 함 -- 감점요소
  - backup할 필요 없는 폴더
  - github에 업로드 할 필요 없는 폴더
     
### 5.3 패키지 버전 이해
- SemVer 방식
  - Semantic Versioning
  - 3자리
    - x, y, z
    - major.minor.patch
    - major: 정식 버전
      - 하위 호환 안될 수 있음
    - minor: 하위호환 버전
      - 하위호환 안되는 기능 업데이트
    - patch: 패치(수정) 버전
      - 기능 구현의 수정
      - 간단한 버그 수정
- 기호
  - ^
    - minor 버전까지 설치하거나 업데이트 가능
    - npm i express@^1.1.1
    - npm i express@1.x.x
    - npm i expresss@^1.1.1 (1.0.0 ~ 1.1.9)
    - npm i express@1.1.x
    - 기호 >, >=, <, <= > useless
    - npm i expresss@>1.1.1 (1.0.0 ~ 1.9.9)

-최신버전 설치
  - npm i express@latest
  - npm i express@x

- 알파, 베타 버전 설치(가장 최근 배포판)
  - npm i express@next

## 5.4 기타 명령어 ( 시험x )

* npm uninstall 페키지명 / npm rm  패키지명

