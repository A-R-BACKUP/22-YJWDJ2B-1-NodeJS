var candyMachine = {
    status: { // 키:값(객체로 설정 가능)
        name: 'node',
        count: 5,
    },
    getCandy: function () { // === getCandy()
        // console.log(this); // this가 global
        this.status.count--;
        return this.status.count;
    },
};

// old
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

//new
// const {getCandy, status:{count}} = candyMachine;

console.log(getCandy());
console.log(count)

// new이던 old던 둘다 오류가 남;; 교수님도 해결 못하심;;



// 배열의 구조분해 할당
var array = ['nodejs', {}, 10, true];
// old
var node = array[0];
var obj = array[1];
var bool = array[3];

//new
const {node, obj, ,bool} = array;
