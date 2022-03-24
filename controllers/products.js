const products = require("../utils/products.js")

const getProduct = async (req,res) => {
    if(req.params.id){
        const product = await products.getProductById(req.params.id);//Devuelve 1
        res.status(200).render("products",{"products": product});//Pinta datos en el pug. Aquí hemos metido data en un objeto para  que con la plantilla del pug lo coja.
      } 
      else{
        const allProducts = await products.getAllProducts();
        res.status(200).render("products",{"products":allProducts});//Pinta datos en el pug
      }
}

const createProduct = async (req,res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body;// json con el nuevo producto a guardar
    const answer = await products.createProduct(newProduct);

    res.status(201).send(`Producto ${answer.title} guardado en el sistema con id ${answer.id}`);

}


const product = {
    getProduct,
    createProduct,
    // editProduct
    // delete Product
}
module.exports = product;