let express=require("express");
let router=express.Router();
let prodController=require("../controller/productController");

//http://localhost:3000/api/product/getProduct
//Show All the data
router.get("/getProduct",prodController.getAllProduct);

//http://localhost:3000/api/product/findProductById/2
// router.get("/findProductById:/_id",prodController.findProductById);

//http://localhost:3000/api/product/storeProduct
router.post("/storeProduct",prodController.storeProduct);

//http://localhost:3000/api/product/deleteProductById/6
router.delete("/deleteProductById/:_id",prodController.deleteProduct)

//http://localhost:3000/api/product/updateProductQuantity
router.patch("/updateProductQuantity",prodController.updateProduct)

//http://localhost:3000/api/product/getProductPrice
router.get("/getProductPrice",prodController.findProductPrice)

//http://localhost:3000/api/product/updateProductPrice/30000
router.patch("/updateProductPrice/:price",prodController.updateProductPrice)

//http://localhost:3000/api/product/getPriceBetween/10000/30000
// router.get("/getPriceBetween/:price1/price2",prodController.getPriceBetween)

//http://localhost:3000/api/product/deleteProductByColor/blue
router.delete("/deleteProductByColor/:color",prodController.deleteProductByColor)

//http://localhost:3000/api/product/insertManyRecord
router.post("/insertManyRecord",prodController.insertManyRecords)

module.exports=router;