const express = require('express');
const app = express()

const port = process.env.PORT || 3000;


//motor de plantilla
app.set('view engine', 'ejs')
app.set('Views', __dirname + './Views')

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.render("index", {titulo : 'title dinamico'})
})

app.get('/Inicio', (req, res) =>{
    res.render("inicio", {TituloDeInicio : 'Titulo en inicio del servio'})
})

app.use((req,res, next) => {
res.status(404).render("404")
})


app.listen(port, () => {
    console.log('A la escucha', port);
})