function createCounter(n) {

    function inner() {
        n++;
    }
    return inner;
}

const counter = createCounter(10);
counter();//11
counter();//12
counter();//13