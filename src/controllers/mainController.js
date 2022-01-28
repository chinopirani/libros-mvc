const path = require("path")

const libros = [
    {
        id: 1,
        nombre: "100 años de soledad",
        autor: "Gabriel Garcia Marquez"
    },

    {
        id: 2,
        nombre: "Ficciones",
        autor: "Jorge Luis Borges"
    },
    {
        id: 3,
        nombre: "Draculad",
        autor: "Bram Stoker"
    }
]

const main = {
    index: (req,res) => {
        // res.sendFile(path.resolve(__dirname, '../views/index.html'));
        res.render('index', {dato: "soy un dato", librosEnviados: libros})
    },
    mostrarDetalle: (req,res) => {
        const parametro = req.params.idLibro
        const libroParaEnviar = libros.find( libro => libro.id == parametro)
        res.render('detalle', {libro: libroParaEnviar})
    }
}

module.exports = main