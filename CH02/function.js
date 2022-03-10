// 기존함수 정의
function add1(x, y){
    return x + y;
}

// 기존함수 정의2, 호출 add2(1, 2)
const add2 = function(x, y){
    return x + y;
}
// 화살표 함수 1, 호출 add3(1,2)
const add3 = (x, y) => {
    return x + y;
}

// 화살표 함수 2: 간편 표시
const add4 = (x, y) => (x + y);
console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));


//const test =(x)=>(x + 7); // 매캐변수가 하나이면 괄호 생략 가능
// ===> const test2 = x => x + 7;

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();