// const condition = true; // true면 resolve, false면 reject
const condition = Math.random()<0.5?true:false;
// 1. 사용규칙: 프로미스 객체 생성
const promise = new Promise((resolve, reject) => {
  if (condition) {
  // 다양한 처리 코드
    resolve('성공'); // resolve 함수를 호출 ==> 결과가 반환됨
  } else {
  // 다양한 처리코드
    reject('실패'); // reject 함수를 호출 ==> 에러 결과가 반환됨
  }
});
// 다른 코드가 들어갈 수 있음
// 2. 사용규칙: 생성된 객체에 then(), catch(), finally() 호출
promise
  .then((message) => { // resolve(인자값)이 호출되면 message=인자값으로 되어서 콜백 실행
    console.log(message); // 성공(resolve)한 경우 실행
  })
  .then((message2) => { // resolve(인자값)이 호출되면 message=인자값으로 되어서 콜백 실행
    console.log(message2); // 성공(resolve)한 경우 실행
    return new promise((resolve, reject) => {
      resolve(message2+2);
    })
  });
  .then((message3) => { // resolve(인자값)이 호출되면 message=인자값으로 되어서 콜백 실행
    console.log(message3+3); // 성공(resolve)한 경우 실행
    }
  })
  .catch((error) => { // reject(인자값)이 호출되면 error=인자값으로 되어서 콜백 실행
    console.error(error); // 실패(reject)한 경우 실행
  })
  .finally(() => { // 끝나고 무조건 실행
    console.log('무조건');
  });


// 이러한 . . . 방식으로 작성하는 방식을 체이닝이라고 한다.