
const getData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        const data = await jsonData.products;
        // console.log(data);
        return data;

    } catch (error) {
        console.log("Error in PostListStore", error);
    }
};
const POST_LIST = await getData();
console.log(POST_LIST);





