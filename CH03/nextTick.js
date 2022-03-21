setImmediate(() => {
    console.log('immediate');
});
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => {
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);