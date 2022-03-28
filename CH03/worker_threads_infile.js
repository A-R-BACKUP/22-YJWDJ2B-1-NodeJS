const {
    // Worker, isMainThread,
    parentPort,
} = require('worker_threads');
// parentPort - 부모 쓰레드와 연결된 객체
parentPort.on( // on(): addEventListener 역활
    'message', // 1st parameter: 이벤트명
    (value) => { // 2nd parameter: 이벤트 핸들러
    console.log('from parent', value);
    parentPort.postMessage('pong'); // 부모 쓰레드 연결 객체.postMessage(부모쓰레드에 보낼려는 데이터)
    parentPort.close(); // 부모쓰레드와의 연결을 종료
    }
);