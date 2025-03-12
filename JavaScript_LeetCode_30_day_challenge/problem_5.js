var filter = function (arr, fn) {
    let filteredArr = [];
    arr.forEach((element, index) => {
        if (!(fn(element, index) === 0 || fn(element, index) === NaN || fn(element, index) === false || fn(element, index) === null)) {
            filteredArr.push(element);
        }
    });
    return filteredArr;
};