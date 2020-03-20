function save(req, res){
    res.send('Usuario > salvar')
}

function get(req, res){
    res.send('Usuario > obter')
}

module.exports = { save, get }
/* {save, get} é equivalente a {save: save, get: get} */