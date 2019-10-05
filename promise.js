

function getTempCallback (location,callback) {
    const pass = false;
    if (pass) {
        callback(undefined, 78);
    } else {
        callback('City not found');
    }
}

getTempCallback('Oswego', function (err, temp) {
    if (temp) {
        console.log(temp);
    } else {
        console.log(err);
    }
    
});

// can only call resolve or reject once and not both ever
function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const pass = true;
            if (pass) {
                resolve(95);
                reject('City not found'); // this never runs
            } else {
                reject('City not found');
                resolve(955); // this never runs
            }
        }, 1000);   
    });
}

getTempPromise('Portland').then(function (temp) {
    console.log(temp);
}, function (err) {
    console.log(err);
});

function addPromise (a,b) {
    return new Promise(function (resolve,reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('a and b must both be numbers');
        }
    });
}

addPromise(1,'ball').then( (result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});