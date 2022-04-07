const express = require("express")      //Importando o Express
const bodyParser = require('body-parser')

const app = express()                   //Iniciando o express e passando para a variável "app"

app.use(bodyParser.urlencoded({extended:true}))

//Express usando o EJS como view engine
app.set('view engine', 'ejs')

//Rota

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/msg", (req, res) => {
    console.log(req.body)
    res.render('mensagem',{nome:req.body.nome, telefone:req.body.telefone,email:req.body.email, pais:req.body.pais})

})


app.listen(5000, function(erro){
    if(erro){
        console.log("Ocoreu um erro")
    }else{
        console.log("Servidor Iniciado com Sucesso")
    }
})
