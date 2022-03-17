## 2. 노드를 위해 알아햐 할 JS 문법
   
### 2.1 ES2015+: ES6+
- ECMAScript 2015년 버전 이후 엄청난 변화
- 최신 문법을 알아야 노드 소스코드 이해 가능
   
#### 2.1.1 const, let
- old: var로 변수 선언
  - 함수 스코프 (스코프: 변수 사용 가능 범위)
  - 호이스팅 문제 존재
    - Hoisting: 선언 된 변수 또는 정의된 함수가 블록 시작하는 곳으로 모두 올라가서 선언 처리 
- new: const, let을 사용
  - 블록 스코프
  - 블록: {~}
  - 사용 하려면 선언 후에 사용 가능
    ```js
    if (true) {
        var x = 3;
    }
    
    console.log(`x = ${x}`); // anonymous 함수내
    
    if(true){
        const y = 2;
        let z = 1;
    }
    
    //  console.log(y); =에러=> if 블록 내에 있는 변수를 외부에서 사용시도
    //  console.log(z); =에러=> if 블록 내에 있는 변수를 외부에서 사용시도
    ```

- const VS let
  - const: 최초 한번 초기화 후 재할당 불가
      - 선언과 동시에 초기화 필수
  - let: 초기화 이후 재할당 가능

    ```js
    const a = 0;
    // a = 1; =에러=> 재할당 불가
    
    let b = 0;
    b = 1; // ==> 재할당 가능
    
    // const c; =에러=> 선언과 동시에 할당 필수(선언과 초기화 함께해야함)
    ```

- 저자의 권장 사용 방법
  - 일반적으로 const 사용, 여러번 변경될 변수 let으로 사용

#### 2.1.2 Template String (템플릿 문자열)
- 백틱(`)으로 만든 문자열
  - 문자열 내에서 변수를 사용가능
  ```js
  const num3 = 1;
  const num4 = 2;
  const res = 3;
  console.log(`${num3} 더하기 ${num4}는 ${res}입니다.`)
  
  결과: 1 더하기 2는 3입니다.
  ```
  
#### 2.1.3 객체 리터럴
- 리터럴(Literal)
  - 구체적인 값
    - 문자열 리터럴: 'abc', "abc". \`abc\`
    - 숫자 리터럴: 123, 12.345
    - 배열 리터럴: [~, ~, ~]
    - 객체 리터럴: {~, ~, ~}
- 객체 리터럴
  - old 버전
  ```js
  // old 버전의 객체 리터럴
  var sayNode = function() {
  console.log('Node'); // 함수선언(정의)
  }; // saynode() 함수 정의
  var es = 'ES';
  var oldObject = {  //sayJS() 메소드 정의
  sayJS: function() {
  console.log('JS');
  },
  sayNodeMethod: sayNode, // 키:값
  };
  oldObject[es + 6] = 'Fantastic';
  oldObject[es + 7] = '가나다';
  // 자바스크립트에서는 실행 중 객체에 속성을 추가 할 수 있다.
  // 속성명(키)를 동적으로 변경시켜가면서 추가하려면 변수처리
  // 이때 사용하는 개념: 객체 <==> 연관배열
  // 연관배열: 베열의 index가 문자열인 배열
  oldObject.sayNodeMethod(); // Node
  oldObject.sayJS(); // JS
  console.log(oldObject.ES6); // Fantastic
  console.log(oldObject.ES7);
  ```
  - new 버전
  ```js
  // 객체 리터럴 신 문법
  const newObject = {
  sayJS() { // 키:값 ---> function 키워드 없이 메소드 정
  console.log('JS');
  },
  sayNode, // 키: 값의 기호가 같으면 하나로 생략 가능
  [es + 6]: 'Fantastic',
  };
  newObject.sayNode(); // Node
  newObject.sayJS(); // JS
  console.log(newObject.ES6); // Fantastic // 키에 변수 사용해서 속성 정의 가능
  ```
  
#### 2.1.4 화살표 함수
- Arrow Function: 매개변수리스트 => 소스코드들
- 기존 함수 정의 방법의 함수와 화살표 함수에서 this 사용시 주의
  - 콜백 함수에서 기존 함수 정의 방법의 함수 this는 global 객체로 바인딩(binding, 묶는다, 연결)
  - 콜백 함수를 화살표함수로 정의하면 this는 콜백 함수 정의하는 곳의 상위 스코프 객체로 바인딩
   
#### 2.1.5 구조분해 할당
- let 변수명  = 객체명, 변수명; ==> let (변수명)  = 객체명;
- 배열 구조분해 할당
    
#### 2.1.6 클래스
- ES6+에서 클래스 문법이 도입
- 실제 작동은 prototype 기반으로 함.
    
#### 2.1.7 Promise(프로미스, 약속)
- 실행을 완료할 것을 악속
- 비동기 동기
- 기존에 콜백함수내에서 콜백함수를 호출하는 것을 반복하는 경우 콜백지옥(callback hell)이 발생하므로 해결아힉 위해 제안된 객체이다
- ES6+ 때 도입된 객체
- 비동기 처리를 성공, 실패로 분리해서 메서드 정의 가능한 특징
- 사용규칙
  - 프로미스 객체 생성
    - 생성자의 파라미터: 콜백함수
      - 콜백함수의 파라미터: resolve(성공), reject(실패)
    - 콜백함수를 정의하는 것에 따라 프로미스 동작이 결정
  - 2.생성된 객체에 then(), catch(), finally() 메서드 호출
    - 파라미터: 콜백함수
    - resolve()가 호출되면 then(콜백)의 콜백 실행
    - reject()가 호출되면 catch(콜백)의 콜백 실행
    - finally(콜백): resolve()호출되거나 reject()호출되면(모든 경우)
      - 콜백의 파라미터: resolve(), reject()의 인자값을 받아내는 매개변수이다.
  - 여러개의 비동기 동작이 순서를 지켜서 실행되어야 하는 경우: 콜백지옥
    - 연속적으로 프로미스 사용: 프로미스 체이닝
    - 첫번째 then(콜백)의 콜백에서 프로미스 객체 생성해서 반환
    - 두번째 then(콜백)의 콜백에서 프로미스 객체 생성해서 반환
    - 세번째 ...
    - 네번째 ...
  - 여러개의 비동기 동작이 모두 실행되어야 하는 경우:
    - Promise.all(프로미스 객체들의 배열)
    - 배열에 있는 모든 프로미스가 성공해야 성공한 것으로 동작
    
#### 2.1.8 async/await
- 노드 7.6 버전 이후, ES2017 이후
- 가독성을 높임
- 동작은 비동기 동작하는데 코딩은 동기적으로 작성할 수 있음
- 적용하는 조건
  - 1. 함수가 반드시 async 함수여야 한다.
       - async 함수는 return하지 않아도 무조건 프로미스 객체를 반환한다
       - async 함수에 대해 then(), catch() 처리 가능함
  - 2. 비동기 코드에는 await를 함께 표기
   
    ```js
    // 1. async 함수 만들 
    async function findAndSaveUser(Users) {
    // const findAndSaveUser = async function(Users){}
    // const findAndSaveUser = async (Users) => {}
    // 2. 비동기 코드에 await
    // 3. error 처리를 위해서는 try~catch를 사용한다.
    try{
      let user = await Users.findOne({})
      user.name='zero';
      user = await user.save();
      user = await Users.findOne({gender: 'm'})
    } catch(err) {
      console.error(err);
      }
    }
    ```
        
### 2.2 Front-end JS
- 거의 대부분 브라우저에서 사용하는 코드
- HTML의 script 태그 내의 코드
- HTML처리 객체
  - DOM: document 객체와 관련 (html 문서와 밀접관계)
  - BOM: window 객체와 관련(history, href, navigator, geolocation)

#### 2.2.1 AJAX(Asynchronous Javascript And XML)
- Web 2.0의 시작, Mashup(매시업)-OpenAPI
- 웹페이지의 이동없이 서버의 요청에 대한 응답을 받아 처리 할 수 있는 기술
- XML ==> JSON
- XMLHttpRequest 객체 사용하여 통신
  - 관련 대체 라이브러리 많음
  - jQuery.ajax(), axios, fetch
    - fetch VS axios
      - fetch: JS 표준 라이브러리
      - axios: 따로 설치해야 하는 라이브러리, 편리성 높음
    - axios 사용
      - 설치 사용
        - npm install axios
      - CDN 사용
        ```js
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        ```
      
#### 2.2.2 FormData
- html의 form 태그 정보를 다루기 쉽게 해주는 객체
  - 동적으로 form 태그의 정보를 제어할 수 있음
  - has(), append(), get(), getAll(), set(), delete()
    
#### 2.2.3 encodeURIComponent, decodeURIComponent
- 웹 브라우저의 주소에 대한 한글처리
  - https://www.zerocho.com/api/search/노드
  - https://www.zerocho.com/api/search/%EB%85%B8%EB%93%9C
  - 보내는 쪽: 한글 주소 부분을 encodeURIComponent(한글 문자열) 처리
  - 받는 쪽: 한글 주소 부분을 decodeURIComponent(받은 문자열) 처리
  - encodeURIComponent('노드'): '%EB%85%B8%EB%93%9C'
  - decodeURIComponent('%EB%85%B8%EB%93%9C): '노드'
    
#### 2.2.4 데이터 속성과 dataset
- html 태그에 사용자 정의 데이터를 포함 시키기 위해서 사용함
  - 태그에 사용자 정의 데이터 포함시키기
  - html 태그내: data - 사용자 정의 데이터 변수명 = 값
    - data - 변수 부분 1 - 변수 부분 2  ==> snake-case
  - html의 JS에서 상기 데이터 처리를 위해 dataset으로 접근 사용 가능
    - 변수 부분 1 변수 부분 2 (변수 부분 2의 첫글자 대문자.)  ==> Camel-case