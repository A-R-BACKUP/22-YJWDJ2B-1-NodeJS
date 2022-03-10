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


const a = 0;
// a = 1; =에러=> 재할당 불가

let b = 0;
b = 1; // ==> 재할당 가능

// const c; =에러=> 선언과 동시에 할당 필수(선언과 초기화 함께 해야함)





const num3 = 1;
const num4 = 2;
const res = 3;

console.log(`${num3} 더하기 ${num4}는 ${res}입니다.`)
