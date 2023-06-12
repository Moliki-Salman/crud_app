const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");


//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);


//configure mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CRUD') 
.then(() => {
    console.log("connected to mongoDB");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

module.exports = app;
