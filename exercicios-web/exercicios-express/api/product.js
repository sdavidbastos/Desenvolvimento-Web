module.exports = (app, text) =>{
    function save(req, res){
        res.send('Produto > salvar > '+text)
    }
    function get(req, res){
        res.send('Produto > get > '+text)
    }
    app.post('/product', save)
    app.get('/product', get)
    
    return { save, get }
}