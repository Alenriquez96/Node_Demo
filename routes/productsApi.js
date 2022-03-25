//Rutas para la API
const express = require('express');
const router = express.Router();

const products = require('../controllers/productsApi.js');
const hasApiKey = require('../middlewares/hasApiKey.js');

//CRUD de productos
router.get('/products/:id?',products.getProduct);
router.post('/products',hasApiKey, products.createProduct);
router.delete('/products',products.deleteProduct);
router.put('/products',products.updateProduct);

router.get('/products',products.populateProduct);

//CRUD de compañias
router.get('/companies/:companyName?',products.getCompany);
router.post("/companies",products.createCompany);
router.delete("/companies",products.deleteCompany);
router.put("/companies",products.updateCompany);

module.exports = router;