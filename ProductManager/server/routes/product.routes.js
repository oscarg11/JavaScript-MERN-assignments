const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts); //get all products 
    app.get('/api/products/:id', ProductController.findOneProduct);//get one product
    app.post('/api/products/create', ProductController.createNewProduct); //create new product
}