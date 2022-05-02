const Usuario = require('./config/db.js')

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

app.post("/msg", async (req, res) => {
    
    const msg = {        
        usuario_nome:req.body.usuario_nome,
        email:req.body.email,
        telefone:req.body.telefone,
        pais:req.body.pais,
        mensagem:req.body.mensagem
        
    }
    console.log(msg)

    const user = await new Usuario(msg).save()
    const mensagens = await Usuario.findAll()
    res.render('mensagem',{        
        usuario_nome: user.usuario_nome,
        telefone:user.telefone,
        email:user.email,
        pais:user.pais,
        mensagem:user.mensagem, mensagens
    })

})

app.get('/msg', async (req,res)=>{
    const mensagens = await Usuario.findAll()
    res.render('mensagem',{        
        usuario_nome: '',
        telefone:'',
        email:'',
        pais:'',
        mensagem:'',
        mensagens
    })
})

app.listen(5000, function(erro){
    if(erro){
        console.log("Ocoreu um erro")
    }else{
        console.log("Servidor Iniciado com Sucesso")
    }
})
