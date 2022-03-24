//Controlador de la API de productos
const ProductApi = require("../models/productsApi.js");//BBDD


// http://localhost:3000/api/products/${id}
const getProduct = async (req,res) => {
    try{
        if(req.params.id){
            const product = await ProductApi.find({id:req.params.id},'-_id');//Devuelve 1 (el -_id es para quitar un id automatico de la bbdd)
            res.status(200).json(product);//Devuelve el producto
          } 
          else{
            const allProducts = await ProductApi.find({},'-_id');//Si no pones nada en el corchete vacío te saca todo.
            res.status(200).json(allProducts);//Deuelve todos los datos
          }
    }
    catch(err){
        res.status(400).json({message:err})
    }
    
}

const createProduct = async (req,res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = new ProductApi(req.body);// json con el nuevo producto a guardar
    const response = await newProduct.save();

    res.status(201).json({message:`Producto ${response.title} guardado en el sistema con id ${response.id}`});
}


const product = {
    getProduct,
    createProduct,
    // editProduct
    // delete Product
}
module.exports = product;