const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Russ',
            age: 25        
        });

        reject('something went wrong');

    }, 5000);    
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Russ',
                age: 25        
            });
        }, 5000);    
    })

}).then((valueFromOtherCall) => {
    console.log('does this run?', valueFromOtherCall);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');