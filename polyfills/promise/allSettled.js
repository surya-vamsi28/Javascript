if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return new Promise(function (resolve) {
      let settledPromises = [];
      let completed = 0;

      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          function (value) {
            completed++;
            settledPromises[i] = { status: "fulfilled", value: value };
            if (completed === promises.length) {
              resolve(settledPromises);
            }
          },
          function (reason) {
            completed++;
            settledPromises[i] = { status: "rejected", value: reason };
            if (completed === promises.length) {
              resolve(settledPromises);
            }
          }
        );
      }

      if (promises.length === 0) {
        resolve(settledPromises);
      }
    });
  };
}
