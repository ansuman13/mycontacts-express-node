const express = require("express");
// TODO: import statement in javascript 

const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})


console.log("Hi, Hello World!!")