if (!Function.call) {
    Function.call = function(obj, ...args) {
        let customObj = Date.now();
        obj[customObj] = this;
        const result = obj[customObj](...args);
        delete obj[customObj];
        return result
    }
}

if(!Function.apply) {
    Function.apply = function(obj, args) {
        let customObj = Date.now();
        obj[customObj] = this;
        const result = obj[customObj](...args);
        delete obj[customObj];
        return result;
    }
}

if (!Function.bind) {
    Function.bind = function(obj) {
        const fn = this
        return function(...args) {
            return fn.call(obj, ...args)
        }
    }
}