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

#### 3.4.3 타이머
- setTimeout(콜백, 밀리초): 한번만 타이머 작동
- setInterval(콜백, 밀리초): 밀리초단위로 여러번 작동
- setImmediate(콜백): 즉시로 실행
  - setTimeout(콜백, 0): 사용하는 걸 권장하지 않음
- clear + 머시기(타이머ID): 해당 타이머의 실행 중지
  - clearTimeout(타이머ID)
  - clearInterval(타이머ID)
  - clearImmediate(타이머ID)

#### 3.4.4 __filename, __dirname
- __filename: 현재 파일의 경로(파일명 포함)
- __dirname: 현재 파일의 디렉토리 경로(파일명 불포함)
  - 경로구분자:
    - 윈도우: \
    - 맥, 리눅스: /
    
#### 3.4.5 module, exports, require
- 모듈 만들기
  - module.exports에 객체를 모듈로 사용 할 객체 정의해서 대입
  - exports 객체로도 모듈 만들기 가능
    - 속성으로만 모듈 정의하기 권장
  - module.exports === exports ===> true
    
- 노드에서 this 사용시 유의!!!
  - 최상위스코프(anonymous)에서 this: module.exports 객체 
  - 함수내의 this: global 객체
    - 예외로 화살표 함수내의 this는 module.exports 객체
  - 참고: 동일한 소스코드의 브라우저에서 실행
    - 최상위스코프(anonymous) this: window 객체
    - 함수내의 this: window객체
    - 화살표함수 this: window객체
  - 정리: 화살표 함수 내의 this는 화살표 함수를 감싸고 있는 스코프(context)의 this임
         
  - require(경로): 함수 호출, 반환 --> export 해 둔 객체
    - require.cache
      - 로딩(loading) 모듈의 다시 로드하지 않고 캐쉬에 있는 정보를 이용
    - require.main
      - 현재 실행되고 있는 모듈

#### 3.4.6 process
- process, thread
- process 현재의 실행 되고 있는 노드 프로세스 정보를 가지고 있음
  - node.exe가 메인 메모리에 로드된 후의 정보
    - process.arch
    - process.version
    - process.platform
    - process.pid
    - process.uptime()
    - process.execPath
    - process.cwd()
    - process.cpuUsage()

#### 3.4.6.1 process.env
- 노드 프로세스가 실행되고 있는 환경의 정보
- 환경 시스템(OS)의 환경변수를 참조
- 환경정보의 수정, 추가, 삭제 가능
- env에 정보 추가
  - 키 = 값
- 주요한 비밀 정보를 process.env에 저장하여 사용할 필요
  - db 서버의 접속 ID, PW등
  - process.env는 외부에 유출 되어서는 안된다
    
#### 3.4.6.2 process.nextTick(콜백)
- setTimeout(콜백, 0);
- setImmeditae(콜백);
- micro task: task보다 더 먼저 실행된다.
  - process.nextTick(콜백);
  - Promise.resolve().then(콜백);
    
#### 3.4.6.3 process.exit(종료 코드)
- 프로세스의 종료
  - 서버외의 노드 응용 프로그램에서 실행을 종료하려고 할때
  - 종료 코드
    - 1: 비정상 종료
    - 0: 또는 인수 없음: 정상 종료
    - WebStorm의 경우에는 프로그램 실행 후에 종료 코드 0으로 완료 된 프로세스 라고 뜨는데 이 부분인듯
    
#### 3.5 노드의 내장 모듈
- 노드 설치시 함께 설치된 모듈, require()해야 함
    
#### 3.5.1 os 모듈
- require('os')
    
#### 3.5.2 path 모듈
- 경로 정보를 다루기 위해 사용하는 모듈
- os 별로 경로구분자, 틀림
- windows: \
- POSIX(Mac, Linux, Unix): /
- 파일명, 확장자 처리에 도움
- 노드에서 최초 상대경로의 시작점: require.main 정보
    
#### 3.5.3 url 모듈
- url 정보를 다루는 모듈
- 2가지 버전 (교과서 p119 그림 3-7)
  - old style: node 6 버전
  - querystring 모듈 사용
  - new style(WHATWG 방식 Web Hypertext Application Technology Working Group) node 7 버전 이후
    - searchParams로 search 정보를 객체로 관리

#### 3.5.4 querystring
- 기존 url 객체에서 query 부분을 다루기 위해서
    
#### 3.5.5 crypto 모듈
- 암호화 처리 모듈
- 암호화의 종류: 2가지
<br>
<br>
- 단방향 암호화: 암호화는 가능하지만 복호화는 불가능
  - 해시함수를 사용
  - 해시함수: 문자열을 고정된 길이의 다른 문자열로 수정하는 함수
  - 평문 ---> 암호문 가능 : 암호화(encoding) 가능 
  - 암호문 ---> 평문 불가능 : 복호화(decoding) 불가
  - 패스워드 ---> 암호화된 패스워드 가능
  - 암호화된 패스워드 ---> 패스워드 불가능 
  - 주로 사용되는 메소드: pbkdf2, script, bscript (교과서 p424 참고)
  - 평문 + salt + 반복횟루를 추가하여 암호화 정도를 높임
  - 응용예: 로그인 처리
  <br>
  <br>
- 양방향 암호화: 암호화와 복호화가 가능한 방식
  - 인증서, https
      
#### 3.5.6 util
- utility - 도구
    
#### 3.5.7 worker_threads
- 노드에서 멀티 쓰레드 방식으로 작업하게 코딩
- isMainThread
- on(), once()
- new Worker()
- postMessage()
- parentPort 객체
- close()
- 복잡한 데이터 보내기: workerData 사용
- 실질적인 예제: 소수 구하기 (prime number)
  - 소수: 약수가 1과 숫자 자신만 있는 수
    - 1, 2, 3, 5, 7, 11, ....
- 쓰레드를 생성, 쓰레드간의 통신 비용(cpu 시간)이 많이 발생하여 잘못 코딩하면 더 느려질 수 있어 주의 필요함
    
#### 3.5.8 child_process
- 멀티프로세싱 코딩
- 자바스크립트 엔진 실행 중 다른 프로세스(예: 파이썬의 실행)의 결과를 사용하려고 할 때 이용하는 모듈
- exec
  - shell
- spawn
  - shell, 다른 프로세스
    
### 3.6 FS(File System)
- fs 모듈 사용
  - 파일 또는 폴더의 생성, 삭제, 읽기(read), 쓰기(write)
  - readFile, writeFile
  - 비동기 처리: 콜백 처리, 프로미스 객체로 처리, async/await
  
#### 3.6.1 동기/비동기
- 노드의 대부분의 내장 모듈들은 비동기 처리
- fs 모듈
  - 비동기 처리: 메소드명(): readFile()
    - 콜백지옥 --> 프로미스처리. async/await
  - 동기처리: 메소드명Sync(): readFileSync()
    - 꼭 필요한 경우만 사용, 싱글쓰레드 점유할 수 있기 때문.
    
#### 3.6.2 Buffer, Stream
- 파일처리 방식: 대용량 파일 처리하기
  - 버퍼 이용: Buffer 객체 만들어 사용
    - 동영상 플레이 버퍼링(Buffering)
    - 사용할 수 있을 정도(정해진 크기)의 데이터를 모으는 동작
    - 교과서 146 페이지 참조
      - const 버퍼명 = Buffer.from(문자열)
      - 버퍼명.length
      - 버퍼명.toString()
      - Buffer.concat(배열)
      - Buffer.alloc(바이트 단위 크기)
  - 스트림 이용
    - 동영상을 실시간으로 송출: 스트리밍(Streaming)
    - 데이터를 일정량으로 잘라서 전송하는 동작
    
#### 3.6.4 쓰레드풀
    
### 3.7 이벤트 처리
- events 모듈: 사용자 정의 이벤트 처리
  - 이벤트 객체를 만들고
  - 이벤트의 발생
    - 이벤트 객체명.emit(이벤트명)
  - 이벤트의 핸들링
    - 이벤트 객체명.on(이벤트명, 콜백): 여러번
    - 이벤트 객체명.addListener(이벤트명, 콜백)
    - 이벤트 객체명.once(이벤트명, 콜백): 한번
  - 이벤트 핸들링 취소
    - 이벤트 객체명.removeListener(이벤트명, 콜백)
      - 콜백은 on, addListener의 콜백과 같아야 함
    - 이벤트객체명.off(이벤트명, 콜백)
    - 이벤트객체명.removeAllListener(이벤트명)
  - 등록된 이벤트 핸들링의 갯수
    - 이벤트객체명.listenerCount(이벤트명)
    
### 3.8 예외처리
- 예외: 처리 못한 에러, 예외는 노드의 중단을 초래할 수 있어 잘 처리해야함.  // 노드는 "싱글쓰레드"이기 때문에.
- try-catch()
- 예외의 발생
  - throw new Error(에러 내용)