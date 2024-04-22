if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    var context = thisArg || window;

    var filteredArray = [];

    for (let i = 0; i < this.length; i++) {
      if (callback.call(this, this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }

    return filteredArray;
  };
}
