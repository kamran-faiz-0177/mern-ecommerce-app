const router = require("express").Router();
const { CreateProduct, FetchProduct, DeleteProduct, UpdateProduct, FetchProductByCategory } = require("../Controllers/ProductController");


router.post("/create",CreateProduct);
router.get("/fetch",FetchProduct);
router.get("/fetch/:productCategory",FetchProductByCategory);
router.put("/update",UpdateProduct);
router.delete("/delete/:id",DeleteProduct);



module.exports = router;