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

function sum(a) {
    return function(b) {
        if(b === undefined) {
            return a
        }else {
            return sum(a+b)
        }
        
    }
}

function sum() {
    let sum = 0;
    let arr = [...arguments]
    arr.forEach((ele) => {sum += ele})
    return sum
}

function sum(...input) {
    let sum = 0;
    let arr = [...input]
    arr.forEach((ele) => {sum += ele})
    return sum
}