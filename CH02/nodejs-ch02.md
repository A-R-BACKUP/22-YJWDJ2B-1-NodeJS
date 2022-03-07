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