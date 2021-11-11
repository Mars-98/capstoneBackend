require('dotenv').config();
const mongoose = require("mongoose");

 mongoose
 .connect(process.env.MONGODB_URI, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("DB Connected!")
    }) 
    .catch ((err) => console.log(err))