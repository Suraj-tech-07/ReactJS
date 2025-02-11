function createCounter(n) {
    let count = -1;
    function inner() {
        count++;
        console.log(n + count);

    }
    return inner;
}

const counter = createCounter(10);
counter();//11
counter();//12
counter();//13