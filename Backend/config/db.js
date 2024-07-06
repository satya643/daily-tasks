require("dotenv").config( );
const mongoose = require("mongoose");
console.log(process.env.mongo_url);
const connection = mongoose.connect(process.env.mongo_url);

module.exports = {
    connection
}
