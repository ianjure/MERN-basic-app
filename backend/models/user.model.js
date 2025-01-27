import mongoose from "mongoose"; // import mongoose to create a model

const userSchema = mongoose.Schema({ // create a schema for the user
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // automatically create fields for when the user registered
});

const User = mongoose.model("User", userSchema); // create a model from the schema

export default User; // export the model so that it can be used in other files