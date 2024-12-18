require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(cors());

const products_routes = require("./routes/products");

app.use("/api/products", products_routes);

app.get("/", (req, res) => {
    res.send("Hi,i am live");
});

const start = async() => {
    try{
        await connectDB(process.env.URL);
        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`);
        })
    }
    catch(error){
        console.log(error);
    }
}

start();