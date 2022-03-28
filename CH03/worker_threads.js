const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) { // 현재 코드가 부모쓰레드일때 (메인쓰레드, 싱글쓰레드) 일 때.
    // const worker = new Worker(__filename);
    const worker = new Worker('./worker_threads_infile.js');
    worker.on( // once()
        'message',
            // message => console.log('from worker', message)
        (message) => {return console.log('from worker', message)}
    );
    worker.on('exit', () => console.log('worker exit'));

    worker.postMessage('ping');
    // 워커쓰레드객체.postMessage(워커쓰레드로 보낼 메시지);
}
// else { // 워커일 때
//     parentPort.on('message', (value) => {
//         console.log('from parent', value);
//         parentPort.postMessage('pong');
//         parentPort.close();
//     });
// }