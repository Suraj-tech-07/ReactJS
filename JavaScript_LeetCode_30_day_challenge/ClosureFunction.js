const outerFn = () => {
    let x = 10;
    const innerFn = () => {
        console.log(x);
    }
    return innerFn;
}
const a = outerFn();//the definition of innerFn is in a now
a();// it will call innerFn(); and it will print 10