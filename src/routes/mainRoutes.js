var express = require('express');
const mainController = require('../controllers/mainController');

var router = express.Router(); 


router.get('/home', mainController.index); /* GET - home page  */

router.get('/libros/:idLibro', mainController.mostrarDetalle); /* GET - detalle page  */

module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible