// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)
require('./utils/dbMongo.js');//Abrir a la BBDD


// Rutas
const entryRouter = require('./routes/entry');
const productRouter = require('./routes/products');
const productsApiRouter = require('./routes/productsApi')

//middlewares
// const hasApiKey = require('./middlewares/hasApiKey');
const notFound = require('./middlewares/notFound')

const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000

// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // Para habilitar recepción de datos JSON en una request




// app.use(hasApiKey);// app.use(hasApiKey) para todos los endpoints


// Rutas
app.use("/",productRouter);// WEB
app.use("/api",entryRouter);// API poner api/entries
app.use("/api",productsApiRouter);//API de los productos(Habría que poner después api/products)

//Middlewares de rutas inexistentes
app.use(notFound)


//app.use("/api/pokemon",pokemonRouter);// API
//app.use("/api/rickmorty",rickMortyRouter);// API

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})