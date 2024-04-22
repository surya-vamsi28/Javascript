if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback, thisArg) {
        var context = thisArg || window;

        for (let i = 0; i < this.length; i++) {
            callback.call(context, this[i], i, this);
        }
    }
}