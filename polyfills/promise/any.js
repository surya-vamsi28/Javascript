if (!Promise.any) {
    Promise.any = function (promises) {
        return new Promise(function (resolve, reject) {

            let errors = [];
            let completed = 0;

            for (let i = 0; i < promises.length; i ++) {
                Promise.resolve(promises[i]).then(function(values) {
                    resolve(values)
                }).catch(function(error) {
                    completed ++;
                    errors[i] = error;
                    if (completed === promises.length) {
                        reject('All Promises are rejected');
                    }
                })
            }
            if (completed === promises.length) {
                reject('All Promises are rejected');
              }

        })
    }
}