const express = require("express");
const app = express();


//middleware
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
module.exports = app;

const blogRouter = require("./routes/BlogRoutes");
app.use("/api/blogs", blogRouter);


const mongoose = require("mongoose");

//configure mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CRUD')
