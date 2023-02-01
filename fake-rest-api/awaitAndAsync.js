//using fetch fucntion with await and asynch all fake rest api product, weather, employee etc.

async function storeData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let result = await res.json();
        console.log(result);
    }catch(e){
        console.log("error generated "+e)
    }
}
storeData();