//Controlador de la API de productos
const exportar = require("../models/productsApi.js");//BBDD


//----------------------CRUD de ProductsApi---------------------//
// http://localhost:3000/api/products/${id}
const getProduct = async (req,res) => {
    try{
        if(req.params.id){
            const product = await exportar.ProductApi.find({id:req.params.id},'-_id');//Devuelve 1 (el -_id es para quitar un id automatico de la bbdd)
            res.status(200).json(product);//Devuelve el producto
          } 
          else{
            const allProducts = await exportar.ProductApi.find({},'-_id');//Si no pones nada en el corchete vacío te saca todo.
            res.status(200).json(allProducts);//Deuelve todos los datos
          }
    }
    catch(err){
        res.status(400).json({message:err})
    }
}

const createProduct = async (req,res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = new exportar.ProductApi(req.body);// json con el nuevo producto a guardar
    const response = await newProduct.save();

    res.status(201).json({message:`Producto ${response.title} guardado en el sistema con id ${response.id}`});
}

const deleteProduct = async (req,res) => {
    try{
        if (req.body.title) {
            const product = await exportar.ProductApi.deleteOne({ title: req.body.title});
            res.status(200).json({message: "Producto borrado correctamente"});
        }
    }
    catch(err){
        res.status(400).json({message:err})
    }
}

const updateProduct = async (req,res) => {
    try{
        if(req.body.title){
            const product = await exportar.ProductApi.updateOne({title:req.body.title});
            res.status(200).json(product);
        }
        else{
            res.json({message: "No existe un producto con ese título"})
        }
    }
    catch(err){
        res.status(400).json({message:err})
    }
}
const populateProduct = async (req,res) =>{
    exportar.ProductApi.
    find({}).
    populate('Company').
    exec(function (err, ProductApi) {
        res.status(200).send(ProductApi);
    });
}



//-------------------------------CRUD de Companies--------------------//
const getCompany = async (req,res) => {
    try{
        if(req.params.companyName){
            const company = await exportar.companies.find({companyName:req.params.companyName},'-_id');//Devuelve 1 (el -_id es para quitar un id automatico de la bbdd)
            res.status(200).json(company);//Devuelve el producto
          } 
          else{
            const allCompanies = await exportar.companies.find({},'-_id');//Si no pones nada en el corchete vacío te saca todo.
            res.status(200).json(allCompanies);//Deuelve todos los datos
          }
    }
    catch(err){
        res.status(400).json({message:err})
    }
}

const createCompany = async (req,res) =>{
    console.log(req.body); // Objeto recibido de producto nuevo
    const newCompany = new exportar.companies(req.body);// json con el nuevo producto a guardar
    const response = await newCompany.save();

    res.status(201).json({message:`Compañía ${response.companyName} guardada en el sistema`});
}

const deleteCompany = async (req,res) =>{
    try{
        if (req.body.companyName) {
            const company = await exportar.companies.deleteOne({ companyName: req.body.companyName});
            res.status(200).json({message: `Compañía ${req.body.companyName} borrado correctamente`});
        }
    }
    catch(err){
        res.status(400).json({message:err})
    }
};

const updateCompany = async (req,res) =>{
    try{
        if(req.body.companyName){
            const company = await exportar.companies.updateOne({companyName:req.body.companyName});
            res.status(200).json(company);
        }
        else{
            res.json({message: "No existe un producto con ese título"})
        }
    }
    catch(err){
        res.status(400).json({message:err})
    }
}


const product = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    populateProduct,
    getCompany,
    createCompany,
    deleteCompany,
    updateCompany
}

module.exports = product;