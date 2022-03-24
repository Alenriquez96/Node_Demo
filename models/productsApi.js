//Añadir el código para hablar con la BBDD
const mongoose = require('mongoose');

const objectSchema = {
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
        companyName:{
            type: String,
            required: true,
            company: {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Company"
            }
        },
        website:{
            type: String,
            required: true,
            web: {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Company"
            }
        }

    }
};

const companyEsquema = {
    companyName:{         
            type: String,
            required: true
        },
    website:{
        type: String,
        required: true
    }
}
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
const companySchema = mongoose.Schema(companyEsquema);
// Crear el modelo
const ProductApi = mongoose.model('Product', productSchema);
const company = mongoose.model('Company',companySchema);

ProductApi.
  findOne({ title: 'test product' }).
  populate('Company').
  exec(function (err, product) {
    if (err) return handleError(err);
    console.log('The company is ', product.company);
  });


module.exports = ProductApi;





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