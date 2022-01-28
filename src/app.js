// Módulos
const path = require("path")
const express = require('express');
const app = express();
// Acá falta uno... 

const rutas = require("./routes/mainRoutes")
const port = 3030

// Configuración
app.use(express.static(path.join(__dirname, '../public')));

// Acá falta el template engine
app.set('views', path.join(__dirname, './views')) // digo a express donde buscar las vistas
app.set('view engine', 'ejs')

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', rutas)

app.get('*', (req, res) => {
    res.send('not found')
});

app.listen(port, () => { console.log('Servidor arriba en el puerto ', port);})