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