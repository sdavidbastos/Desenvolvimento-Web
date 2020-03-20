const express = require("express");
const app = express();
const bodyParser = require('body-parser')
/* Metodo options utilizado em um contexto rest em pre voo para saber s tem autorização para utilizar aquele metodo da api. */
/* Use é utilizado para qualquer tipo de requisição. Seja ela post ou get */
/* App all atende a todas as requisições */
/* A ordem das funções influencia, pois trabalha com a cadeia de responsabilidade. Cadeia cujo o nome é next*/
/* Middleware é uma função que recebe requisição, resposta e next */

const saudacao = require("./saudacaoMid");
const userApi = require('./api/user')
const productApi = require('./api/product')
productApi(app, 'com param !')

app.post('/usuario', userApi.save)
app.get('/usuario', userApi.get)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(saudacao("Guilherme"));

app.use((req, res, next) => {
  console.log("Antes");
  next();
});

app.get("/clientes/relatorio", (req, res)=>{
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano} `)
})
app.post('/corpo', (req, res)=>{
/*     let corpo = ''
     req.on('data') = quando estiver chegando dados a partir do corpo da requisição 
    req.on('data', function(parte){
        corpo+=parte
    })
    req.on('end', function(){
        res.send(corpo)
    }) */
    res.send(JSON.stringify(req.body))
})

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});


app.get("/opa", (req, res, next) => {
  /* Metodo middleware */
  console.log("Durante");
  res.json({
    data: [
      { id: 7, name: "Ana", position: 1 },
      { id: 34, name: "Bia", position: 2 },
      { id: 73, name: "Carlos", position: 3 }
    ],
    /* count: quantos registros tem na base. */
    count: 30,
    /* skip: quantas paginas eu já pulei. */
    skip: 0,
    /* limit: quantidade de documentos por pagina  */
    limit: 3,
    status: 200
  });
  next();

  /*     ({
        name: 'iPad 32GB',
        price: 1899.00,
        discount: 0.12
    }) */
});

app.use((req, res) => {
  console.log("Depois");
});

app.listen(3000, () => {
  console.log("Backend executando 2!");
});
