const db = require("../models/entry.js")

const getEntries = async (req,res) => {
    if(req.query.email){
        const entries = await db.getProductById(req.query.email);//Devuelve 1
        res.status(200).json(entries);//Deuelve JSON respuesta
      } 
      else{
        const entries = await db.getAllEntries();
        res.status(200).json(entries);//Deuelve JSON respuesta
      }
}

const createEntry = async (req,res) => {
    console.log(req.body); // Objeto recibido de entry nuevo
    const newEntry = req.body;// json con el nuevo producto a guardar
    const response = await db.createEntry(newEntry);

    res.status(201).json(response);
}

const updateEntries = async (req,res) => {
    console.log(req.body); // Objeto recibido de entry nuevo
    const newEntry = req.body;// json con el nuevo producto a guardar
    const response = await db.updateEntry(newEntry);

    res.status(200).json(response);
}

const deleteEntry = async (req,res) => {
    if(req.query.title){
        const entries = await db.getProductByTitle(req.query.title);//Devuelve 1
        res.status(200).json(entries);//Deuelve JSON respuesta
      } 
      else{
        const entries = await db.getAllEntries();
        res.status(200).json(entries);//Deuelve JSON respuesta
      }
}

const entries = {
    getEntries,
    createEntry,
    updateEntries,
    deleteEntry
}
module.exports = entries;