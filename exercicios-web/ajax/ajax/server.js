const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// express provê os arquivos da aplicação
app.use(express.static('.'))
// lê os dados de um submit e transforma em objeto
app.use(bodyParser.urlencoded({extended: true}))
// Caso venha json, converte para objeto
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,callback) {
        callback(null, './upload')
    },
    filemame: function(req,file,callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err){
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req,res)=>{
    res.send({
        ...req.body,
        id: 2
    })
})

app.get('/parOuImpar', (req,resp) =>{
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    resp.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Exeutando... '))