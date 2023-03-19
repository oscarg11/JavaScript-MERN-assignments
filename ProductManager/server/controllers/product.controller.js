const Product = require('../models/product.model');

//get all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

//create a new product
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}