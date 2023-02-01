//1. using fetch function call fake rest api of product, weather, employee etc

function storeData(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(result=>result.json()) .then(res=>console.log(res)).catch(err=>console.log("Error Generated "+err))

    // fetch("http://localhost:3000/storeEmployee").then(result=>result.json()) .then(res=>console.log(res)).catch(err=>console.log("Error Generated "+err))
}

storeData();