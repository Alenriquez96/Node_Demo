//Añadir el código para hablar con la BBDD
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            },
            message: "Porfa, sólo imágenes JPG"
        }
    },
    company:{
                type: mongoose.Types.ObjectId,
                required: true,
                ref: "Company" 
        }

});

const companySchema = new mongoose.Schema({
    companyName:{         
            type: String,
            required: true,
            unique: true
        },
    website:{
        type: String,
        required: true,
        unique:true
    }
});

// Crear el esquema
// const productSchema = mongoose.Schema(objecSchema);
// const companySchema = mongoose.Schema(companyEsquema);

// Crear el modelo
const ProductApi = mongoose.model('Product', productSchema);
const companies = mongoose.model('Company',companySchema);

// ProductApi.
//   find({}).
//   populate('Company').
//   exec(function (err, ProductApi) {
//     res.status(200).send(ProductApi)
//   });

const exportar = {
    ProductApi,
    companies
};

module.exports = exportar;





//--------------Le chutamos esto por la consola de MONGODB-----//
// db.products.insertMany(
//     [
//     {
//         id:0,
//         title: 'test product',
//         price: 13.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.jpg'
//     },
//     {
//         id:1,
//         title: 'test product',
//         price: 13.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.jpg'
//     },
//     {
//         id:2,
//         title: 'test product',
//         price: 13.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.jpg'
//     },
//     {
//         id:3,
//         title: 'test product',
//         price: 13.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.jpg'
//     }
//     ])