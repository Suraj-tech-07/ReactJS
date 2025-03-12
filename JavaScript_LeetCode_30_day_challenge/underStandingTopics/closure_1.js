// ************* 1 ***********

// const a = function hello() {
//     console.log("Hello");
// }
// a();// Hello
// b = a;
// b();// Hello

// ************* 2 ***********

// function outerFunction() {
//     let name = "Suraj";
//     function innerFunction() {
//         console.log(name);
//     }
//     return innerFunction;
// }
// let inner = outerFunction();
// inner();
// ************* 3 ***********

// function outer(n) {

//     function inner() {
//         console.log(n);
//         n++;
//     }
//     return inner;
// }

// r = outer(10);
// r();
// r();

var createCounter = function (n) {
    i = -1;

    return function () {
        i++;
        console.log(n + i);
    };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12



