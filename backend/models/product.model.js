import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // automatically create fields for when the product was created and updated
});

const Product = mongoose.model("Product", productSchema);

export default Product;