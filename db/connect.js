
const mongoose = require('mongoose');

const USERNAME = 'suzaan1000';
const PASSWORD = "testrestapi180";
const DATABASE_NAME = "SuzaanRESTAPI";

url = `mongodb+srv://suzaan1000:testrestapi180@suzaanrestapi.bxlls.mongodb.net/SuzaanRESTAPI?retryWrites=true&w=majority&appName=SuzaanRESTAPI`

const connectDB = (URL) => {
    console.log("Connecting to database...");
    
    return mongoose.connect(URL, {})
    // return mongoose.connect(url, {})
    .then(() => {console.log("Connected to database...")})
    .catch((error) => {console.log("Connection to database failed... " + error)});
}

module.exports = connectDB;