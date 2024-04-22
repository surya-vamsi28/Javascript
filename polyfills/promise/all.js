if (!Promise.all) {
    Promise.all = function(arr) {
        return new Promise(function (resolve, reject) {
            let result = []
            let count = 0
            for (let i = 0; i < arr.length; i++) {
                Promise.resolve(arr[i]).then(function(data) {
                    result[i] = data
                    count++
                    if (count === arr.length) {
                        resolve(result)
                    }
                }, function(err) {
                    reject(err)
                })
            }
        })
    }
}