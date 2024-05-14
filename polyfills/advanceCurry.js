function advanceCurry(fn) {
    return function curry(...args) {
        if(args.length >= fn.length) {
            return(fn.apply(this, args))
        } else {
            return function (...args2) {
                curry.apply(this, args.concat(args2))
            }
        }

    }
}