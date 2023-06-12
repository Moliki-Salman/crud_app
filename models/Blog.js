const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    username: {
        type: String,
    },
    firstname: {
        type: String, 
    },
    lastname: {
        type: String, 
    },
    email: {
        type: String, 
    },
    password: {
        type: Number,
    },
    phone_number: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

 module.exports = mongoose.model("Blog", blogSchema);


