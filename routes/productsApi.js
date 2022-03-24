//Rutas para la API
const express = require('express');
const router = express.Router();

const products = require('../controllers/productsApi.js');
const hasApiKey = require('../middlewares/hasApiKey.js');


router.get('/products/:id?',products.getProduct);
router.post('/products',hasApiKey, products.createProduct);

module.exports = router;