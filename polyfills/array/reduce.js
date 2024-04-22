if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback, initialValue) {
        if (this == null) {
            throw new TypeError("Array.prototype.reduce called on null or undefined");
        }

        var accumulator = initialValue !== undefined ? initialValue : this[0];
        var startIndex = initialValue !== undefined ? 0 : 1;

        for (var i = startIndex; i < this.length; i++) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        }

        return accumulator;
    }
}