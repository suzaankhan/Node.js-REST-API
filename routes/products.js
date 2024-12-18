
const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProductByID,
    postProduct,
    updateDataById,
    deleteProduct,
    getDataByQuery,
    paginationDemo
} = require("../controllers/products")

router.route("/getProducts").get(getAllProducts);
router.route("/getProducts/:id").get(getProductByID);
router.route("/postProduct").post(postProduct);
router.route("/updateProduct/:id").patch(updateDataById);
router.route("/deleteProduct/:id").delete(deleteProduct);
router.route("/getDataByQuery").get(getDataByQuery);
router.route("/paginationDemo").get(paginationDemo);

module.exports = router;