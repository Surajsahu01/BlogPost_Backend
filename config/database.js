const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Databes coonect successfully"))
    .catch( (error) => {
        console.log(error);
        console.log("Database connection issue.");
        process.exit(1);
    })
};

module.exports = connectWithDb;