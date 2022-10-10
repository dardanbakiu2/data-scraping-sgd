const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = mongoose.model('products', new Schema({
    name: String, 
    price: Number,
    created_at: Date,
    updated_at: Date
}));

module.exports = productSchema;