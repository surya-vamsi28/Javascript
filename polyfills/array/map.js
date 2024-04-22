if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    var context = thisArg || window;
    var mappedArray = [];

    for (let i = 0; i < this.length; i++) {
      mappedArray[i] = callback.call(context, this[i], i, this);
    }

    return mappedArray;
  };
}