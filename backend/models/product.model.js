import mongoose from "mongoose";

const productSchema = mongoose.Schema({ // create a schema for the product
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

const Product = mongoose.model("Product", productSchema); // create a model from the schema

export default Product; // export the model so that it can be used in other files