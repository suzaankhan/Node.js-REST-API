
const Products = require('../models/schema');

const getAllProducts = async(req, res) => {
    try{
        const result = await Products.find({});
        res.status(200).json(result);
    }
    catch(error){
        res.status(404).json({error : "Failed to retrive all products data"});
    }
}

const getProductByID = async(req, res) => {
    try{
        const { id } = req.params;
        const result = await Products.find({id : id});
        console.log(result);
        if(result.length === 0){
            return res.status(404).json({error : "No product found for given ID"});
        }
        // send the retrived product
        res.status(200).json(result);
    }
    catch(error){
        res.status(404).json({error : "Failed to retrive the product"});
    }
}

const postProduct = async(req, res) => {
    try{
        const { id, name, company, price, featured, rating } = req.body;
        const data = {
            id : id,
            name : name,
            company : company,
            price : price,
            featured : featured,
            rating : rating
        }
        await Products.create(data);
        // or await Products.create(req.body);
        return res.status(200).json({message : "Data saved in database"});
    }
    catch(error){
        res.status(404).json({error : "Some error occured(post product)" + error});
    }
}

const updateDataById = async(req, res) => {
    try{
        const { id } = req.params;
        const updateFields = req.body;

        const result = await Products.find({id : id});
        if(result.length === 0){
            return res.status(400).json({message : "Product for given id does not exist"});
        }
        await Products.updateOne({id : id}, {$set : updateFields});
        res.status(200).json({message : "Product updated successfully"});
    }
    catch(error){
        res.status(404).json({error : "Some error occured " + error});
    }
}

const deleteProduct = async(req, res) => {
    try{
        const { id } = req.params;

        const result = await Products.deleteOne({id : id});
        console.log(result);
        if(result.deletedCount === 0){
            return res.status(404).json({message : "Product with given id does not exists"});
        }
        res.status(200).json({message : "Product deleted successfully"});
    }
    catch(error){
        res.status(404).json({error : "Some error occured(delete) " + error});
    }
}

const getDataByQuery = async(req, res) => {
    try{
        // const query = req.query;
        // const result = await Products.find(query);

        const {company, name, sort, select} = req.query;
        const queryProps = {};

        if(company){
            queryProps.company = company;
        }
        if(name){
            queryProps.name = {$regex : name , $options : 'i'};
        }

        let apiData = Products.find(queryProps);

        if(sort){
            let fixedSort = sort.split(",").join(" ");
            apiData = apiData.sort(sort);
        }
        if(select){
            let selectFixed = select.split(",").join(" ");
            apiData = apiData.select(selectFixed);
            console.log(selectFixed);
        }

        console.log(queryProps);
        // custom selection
        const result = await apiData;
        
        res.status(200).json(result);
    }
    catch(error){
        res.status(404).json({error : "Some error occured " + error});
    }
}

const paginationDemo = async(req, res) => {
    try{
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 3;
        console.log(page + " " + limit);

        let skip = (page - 1) * limit;

        let result = await Products.find({}).skip(skip).limit(limit);
        // result = result.slice(skip, skip + limit);
        // console.log(skip + " " + skip+limit);
        res.status(200).json({result, nBhits : result.length});
    }
    catch(error){
        res.status(404).json({error : " " + error});
    }
}

module.exports = {getAllProducts,
     getProductByID, 
     postProduct, 
     updateDataById,
     deleteProduct,
     getDataByQuery,
     paginationDemo
    };