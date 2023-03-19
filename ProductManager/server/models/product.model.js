const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required"],
        minlength: [2, "Title must be more than 2 characters"],
        maxlength: [255, "Title must be less than 255 charcters"]
    },
    price: {
        type: Number,
        minimum: 0
    },
    description:{
        type: String,
        required: [true, "A description is required"],
        minlength: [2, "Description must be more than 3 characters"],
        maxlength: [255, "Description must be less than 255 charcters"]
    },
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;