const express = require("express");
const {createProduct, getProducts, getProductById, updateProductById, deleteProductById,} = require("../controllers/product.controller.js")

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

module.exports = router;