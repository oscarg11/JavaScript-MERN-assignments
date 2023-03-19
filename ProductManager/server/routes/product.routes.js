const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts); //get all products 
    app.post('/api/products', ProductController.createNewProduct); //create new product
}