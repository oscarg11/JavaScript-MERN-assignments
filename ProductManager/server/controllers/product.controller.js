const Product = require('../models/product.model');

//get all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            console.log(allProducts)
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

//get a single product
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then( oneProduct => {
            console.log(oneProduct)
            res.json({ product: oneProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

//create a new product
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            console.log(newlyCreatedProduct)
            res.json({ product: newlyCreatedProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}