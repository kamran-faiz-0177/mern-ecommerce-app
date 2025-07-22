const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
    productPrice: {
        type: String,
        required: true,
    },
    productImg: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;