const {
    // Worker, isMainThread,
    parentPort, workerData,
} = require('worker_threads');


const data = workerData;
parentPort.postMessage(data.start + 100 + data.msg);
// parentPort.on(); 처리하지 않아서 postMessage() 처리 후 close() 처리함.