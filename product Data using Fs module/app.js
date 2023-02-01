let fs=require("fs");
let product={pid:100,pname:"TV",price:10000,qty:11};
let products=JSON.parse(fs.readFileSync("product.json"))
products.push(product);
fs.writeFileSync("product.json",JSON.stringify(products));
Response.send("Product Data Stored");