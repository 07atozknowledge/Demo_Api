require("dotenv").config();
const connectDB =  require("./DB/connect");
const Product = require("./models/Models");

const productData = require("./products.json");


const start = async () => {
    try {

        await connectDB(process.env.URL);
        await Product.create(productData);
        console.log("Success");
        

        
    } catch (error) {
        console.log(error);
        
    }
};

start();