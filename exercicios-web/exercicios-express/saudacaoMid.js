/* Modulo no node é um arquivo. Dentro do modulo tudo fica encapsulado dentro do modulo. A idea do modulo é modulariza a aplicação e ter um maior encapsulamento */
/* Pode-se passar outros parametros como nome e não somente req, resp e next */
function saudacao(nome) {
  return function(req, res, next) {
    console.log(`Seja bem vindo seu ${nome}. E essa quarentena ai ?`);
    next();
  };
}
module.exports = saudacao;
