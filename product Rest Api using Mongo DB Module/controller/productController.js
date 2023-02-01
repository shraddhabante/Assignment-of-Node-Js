
let prodCollection = require("../config/dbConfig");

//find all data of product
exports.getAllProduct = async (request, response) => {
    try {
        let result = await prodCollection.getCollection().find().toArray();
        response.json(result);
    } catch (e) {
        response.json("error generated" + e)
    }
}

//find all data of product by id
// exports.findProductById = async (request, response) => {
//     let prodId = eval(request.params._id);
//     try {
//         let result = await prodCollection.getCollection().findOne({_id:prodId})
//         if (result == null) {
//             response.json({ "msg": "Record not present with id as " + prodId })
//         } else {
//             response.json(result);
//         }
//     } catch (e) {
//         response.json({ "msg": "Error generated " + e });
//     }
// }

//insert the data
exports.storeProduct = async (request, response) => {
    let prod = request.body;
    try {
        var result = await prodCollection.getCollection().insertOne(prod);
        response.send(result);
    } catch (e) {
        response.send(e);
    }
}

//delete the data by id
exports.deleteProduct = async (request, response) => {
    let prodId = eval(request.params._id);
    try {
        let result = await prodCollection.getCollection().deleteOne({ _id: prodId });
        if (result.deletedCount > 0) {
            response.send("Record deleted sucessfully");
        } else {
            response.send("Record not present with id as " + prodId);
        }
    } catch (e) {
        response.send(e);
    }
}

//update the data
exports.updateProduct = async (request, response) => {
    let prod = request.body;
    try {
        var result = await prodCollection.getCollection().updateOne({ _id: prod._id }, { $set: { quantity: prod.quantity } });
        if (result.modifiedCount > 0) {
            response.send("Quantity updated sucessfully");
        } else if (result.matchedCount > 0) {
            response.send("Quantity didn't update because old and new quantity are same")
        } else {
            response.send("record not present")
        }
    } catch (e) {
        response.send(e);
    }
}

//find those record whose price is greater than 20000
exports.findProductPrice = async (request, response) => {
    try {
        let result = await prodCollection.getCollection().find({ price: { $gt: 20000 } }).toArray();
        response.json(result)
    } catch (e) {
        response.json("Error generated " + e)
    }
}

//update those record whose price is greater than equal to 30000
exports.updateProductPrice = async (request, response) => {
    let prodPrice = eval(request.params.price)
    try {
        let result = await prodCollection.getCollection().updateMany({ price: { $gte: prodPrice } }, { $set: { price: 40000 } })
        if (result.modifiedCount > 0) {
            response.send("price updated sucessfully")
        } else if (result.matchedCount > 0) {
            response.send("price can't update because old and new value are same")
        } else {
            response.send("record not present")
        }
    } catch (e) {
        response.send(e)
    }
}

//display the price between 20000 and 40000
// exports.getPriceBetween = async (request, response) => {
//     // let maxPrice=eval(request.params.price1);
//     // let minPrice=eval(request.params.price2);
//     try {
//         let result = await prodCollection.getCollection().find({ $and: [{ price1: { $gt: maxPrice } }, { price2: { $lt: minPrice } }] })
//         // let result=await prodCollection.getCollection().find({$and:[{price:{$gt:10000}},{price:{$lt:30000}}]})
//         response.send(result)
//         // console.log(result)
//     } catch (e) {
//         response.send(e)

//     }
// }

//delete record by color field
exports.deleteProductByColor = async (request, response) => {
    let prodColor = request.params.color;
    try {
        let result = await prodCollection.getCollection().deleteOne({ color: prodColor })
        if (result.deletedCount > 0) {
            response.send("record deleted sucessfully")
        } else {
            response.send("record not present")
        }
    } catch (e) {
        response.send(e)
    }
}

//insert Many records
exports.insertManyRecords=async(request,response)=>{
    let prod=request.body;
    try{
        var result=await prodCollection.getCollection().insertMany(prod);
        // if(result.insertedCount>0){
        //     response.send("record inserted sucessfully")
        // }else{
        //     response.send("Id must be unique")
        // }
        response.json(result);
    }catch(e){
        response.json(e)
    }
}