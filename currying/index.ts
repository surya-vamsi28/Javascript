function curry(fn) {
    return function (a){
        return function (b) {
            return fn(a,b)
        }
    }
}

function sum(a, b) {
    return a + b;
} 

let currySum = curry(sum);

currySum(5)(2)


function advanceCurry(fn) {
    return function (...args) {
        if (args.length >= fn.length) {
            fn.apply(this, args)
        } else {
            return function(...args2) {
                return advanceCurry.apply(this, args.concat(args2))
            }
        }
    }
}

function sumSuper(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = advanceCurry(sum);
  
  alert( curriedSum(1, 2, 3) ); // 6, still callable normally
  alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
  alert( curriedSum(1)(2)(3) )