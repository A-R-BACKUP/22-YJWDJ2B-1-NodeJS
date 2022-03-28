const {
    Worker, isMainThread,  workerData,// parentPort,
} = require('worker_threads');

if (isMainThread) { // 부모일 때
    const threads = new Set();
    threads.add(new Worker('./worker_data_infile.js', {
        workerData: { start: 1, msg:'첫번째' },
    }));
    threads.add(new Worker('./worker_data_infile.js', {
        workerData: { start: 2, msg:'두번째'},
    }));
    for (let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('job done');
            }
        });
    }