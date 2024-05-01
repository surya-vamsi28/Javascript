if (!Promise.all) {
    Promise.all = function (arr) {
      return new Promise(function (resolve, reject) {
        let result = [];
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          Promise.resolve(arr[i]).then(
            function (value) {
              result[i] = value;
              count++;
  
              if (count === arr.length) {
                resolve(result);
              }
            },
            function (error) {
              reject(error);
            }
          );
        }
      });
    };
  }
  
  if (!Promise.allSettled) {
      Promise.allSettled = function(arr) {
          return new Promise(function(resolve) {
              let result = [];
              let count = 0;
              for (let i = 0; i < arr.length; i++) {
                  Promise.resolve(arr[i]).then(function(value){
                      result[i] = {status: 'fullfilled',  value: value};
                      count++
  
                      if(count === arr.length) {
                          resolve(result);
                      }
                  }, function(error) {
                      result[i] = {status: 'rejected', value: error};
                      count++;
                      if(count === arr.length) {
                          resolve(result);
                      }
  
                  })
              }
          })
      }
  }

  if (!Promise.any) {
    Promise.any = function(arr) {
        return new Promise(function(resolve, reject) {
            let errors = [];
            let completed = 0;
            for (let i = 0; i < arr.length; i++) {
                Promise.resolve(arr[i]).then(function(value){
                    resolve(value)
                }, function(error){
                    errors[i]=error;
                    completed++;
                    if (completed === resolve.length) {
                        reject('All Promises are rejected');
                    }
                })
            }
        })
    }
  }