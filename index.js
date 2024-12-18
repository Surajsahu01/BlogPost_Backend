const express = require("express");
const app = express();
const blog = require("./routes/blog");

require("dotenv").config()

const PORT = process.env.PORT || 3000;

// middel ware
app.use(express.json());

// mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, () =>{
    console.log(`Application ruuning is successfully! ${PORT} `);
    
})

app.get('/', (req,res) => {
        res.send(`<h1>This is my fisrt page.</h1>`)
})