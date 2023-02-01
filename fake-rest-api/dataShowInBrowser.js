//Using fetch funtion call fake rest api of emplyee, todo and display on browser with the help of DOM concept. It may be table format or list format or any other format.
async function storeData(){
    let res=await fetch("https://jsonplaceholder.typicode.com/todos");
    let result=await res.json();
    // let result=await res.text();
    document.getElementById("display").innerHTML=result;
}
storeData();