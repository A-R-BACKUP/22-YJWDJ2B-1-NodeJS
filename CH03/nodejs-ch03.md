## 3. 노드 기능 알아보기

### 3.1 REPL 사용하기
- Read - Eval - Print - Loop
- 실행 방법: cmd창에서 node + 엔터로 실행 가능
  - 프롬프트가 ' > ' 표시됨
  - js 소스코드 입력
- 종료: ctrl+c (두번 입력) 또는 .exit

### 3.2 JS 파일 실행
- 긴 소스코드는 REPL로 실행시키기 어려움 (간단한 테스트)
- 긴 소스코드는 js파일로 작성하고 cmd 창에서 실행 가능
  - node 실행 시킬 파일 경로.js
    
### 3.3 모듈 작성
- 하나의 소스코드로 서비스 실행되는 경우는 거의 없음.
  - 관리를 위해 모듈 개념 사용
  - 모듈(module): 특정 기능을 수행하는 함수 또는 변수의 집합
  - 집합 ---> 재사용가능 ---> 소스코드의 재사용성을 높임
- 모듈 정의
  - module.exports
- 모듈 사용
  - require(사용 모듈 경로)
- 모듈일지라도 확장자는 js
  - ES6 이후로 모듈을 구분하기 위해서 확장자를 mjs(있지만 잘 안 쓴다.)
  - module.exports ---> export default 모듈로 사용 할 객체
- require(사용모듈경로)
  - ---> import(변수명) from 사용모듈경로;

### 3.4 노드의 내장객체
- 따로 설치하지 않고 사용가능
    
#### 3.4.1 global
- 전역 객체, 브라우저 - window 객체와 같은 역활
- window.setTimeout() ----> setTimeout() 사용가능
- global.setTimeout() ----> setTimeout() 사용가능
- global 키워드 생략 가능
- global.console.log('')
- 모든 js에서 공유하는 객체
  - 공유 데이터 사용시키기 가능: 사용을 권장하지 않음
- js에서는 실행중 객체에 동적으로 속성 추가 가능

#### 3.4.2 console 객체
- [global.]console 객체
  - 주로 디버깅용: 변수값 확인, 에러내용 확인
  - 소스코드의 실행시간 조사
    - console.time(식별문자열): 실행시간 조사 시작
    - console.timeEnd(식별문자열): 실행시간 조사 종료 및 실행시간 표시해줌