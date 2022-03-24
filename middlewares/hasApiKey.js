//http://localhost:3000/api/entries ---> Rechazar
//http://localhost:3000/api/entries?api_key=123456 ---> pasar
function hasApiKey(req,res,next) {
    const API_KEY = 123456;
    //Buscar en la bbdd la api key que se ha mandado.
    if(req.query.api_key==API_KEY){
        next();
    }else{
        res.status(401).json({message:'Error. No se ha facilitado la api_key'})
    }
}


module.exports = hasApiKey;