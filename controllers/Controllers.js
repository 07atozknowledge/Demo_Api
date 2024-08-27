const Product = require("../models/Models");

const getAllProducts = async (req, res) => {

    const { company , name , price , featured , sort , select } = req.query;
    const queryObject = {};

    // Searching functionality......

    if( company ){
        queryObject.company = company;
    }

    if( name ){
        queryObject.name = { $regex: name , $options: "i"};
    }

    if( price ){
        queryObject.price = price;
    }

    if( featured ){
        queryObject.featured = featured;
    }

    // Sorting functionality........

    let apiData = Product.find(queryObject);

    if(sort){
        // let sortFixing =  sort.replace(","," ");

        let sortFixing =  sort.split(",").join(" ");
        apiData = apiData.sort(sortFixing);
    }

    // Select functionality..........

    if( select ){
        

        let selectFixing =  select.split(",").join(" ");
        apiData = apiData.select(selectFixing);
    }

    // Pagination functionality..........

    let page = (req.query.page) || 1 ;
    let limit = (req.query.limit) || 4 ;
    let skip = ( page - 1 )*limit;

    apiData = apiData.skip(skip).limit(limit);


    const myData = await apiData;
    res.status(200).json({myData , nbHits: myData.length});
};




module.exports = getAllProducts;