// In node js create array and store 10 names. Do the operation
var stuNames = ["Neeta", "Seeta", "Geeta", "Smith", "Alex", "John", "Smith", "Shra", "Diksha", "Ravi"];


// 1. search name
var findName=stuNames.includes("Shra");
console.log(findName);

// 2. add new name in between array
stuNames.splice(2,0,"Kasish")
console.log(stuNames);

// 3. remove the name
stuNames.splice(3,1);
console.log(stuNames);

// 4. display all names using loop
for(var i=0;i<stuNames.length;i++){
    console.log(stuNames[i]);
}