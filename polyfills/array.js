if (!Array.map) {
  Array.map = function (callback, thisArg) {
    const arr = this;
    const context = thisArg || window;
    let resArray = [];
    for (let i = 0; i < arr.length; i++) {
      resArray[i] = callback.call(context, arr[i], i);
    }
    return resArray;
  };
}

if (!Array.forEach) {
  Array.forEach = function (callback, thisArg) {
    const arr = this;
    const context = thisArg || window;
    for (let i = 0; i < arr.length; i++) {
      callback.call(context, arr[i], i);
    }
  };
}

if (!Array.filter) {
  Array.filter = function (callback, thisArg) {
    const arr = this;
    const context = thisArg || window;
    let resArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback.call(context, arr[i], i)) {
        resArray.push(arr[i]);
      }
    }
    return resArray;
  };
}