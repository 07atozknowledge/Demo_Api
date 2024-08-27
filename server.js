require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

const productRoute = require("./routes/Routes");
const connectDB = require("./DB/connect");

app.get("/" , (req,res) => {
    res.send("Hi, I am Live!!");
});

//Middleware 

app.use("/api/products", productRoute);

const start = async () => {
    try {

        await connectDB( process.env.URL );
        app.listen(PORT , () => {
            console.log( `Server is running at port :- ${PORT}` );
            
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

start();