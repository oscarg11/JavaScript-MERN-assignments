const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts); //get all products 
    app.get('/api/products/:id', ProductController.findOneProduct);//get one product
    app.patch('/api/products/:id', ProductController.updateProduct)//updates a product
    app.post('/api/products/create', ProductController.createNewProduct); //create new product
    app.delete('/api/products/:id', ProductController.deleteProduct); //delete a product


}