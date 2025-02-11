const hello = (callBack) => {
    callBack();
}
hello(print);
function print() {
    console.log("Hello");
}

// here hello is higher order function because it takes another function as an argument