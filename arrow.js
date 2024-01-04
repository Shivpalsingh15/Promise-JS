function sum(a, b){
    return a+b;
}

//arrow function.
let sumA= (a, b)=>{
    return a+b;
}

console.log('sum:', sum(4, 5))
console.log('sumA:', sumA(4, 5))

//anonymns function.
let anonymns = function (a, b){
    return a*b
}

let result = anonymns(4, 5)
console.log('result:', result)


//invoked functions


let iife = (function () {
  // This code will be executed immediately
  console.log("Hello, world!");
})();



