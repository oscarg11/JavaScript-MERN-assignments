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

//update product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


