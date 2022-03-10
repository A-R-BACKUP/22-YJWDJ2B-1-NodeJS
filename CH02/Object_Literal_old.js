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