// function alterarAltura(valor, duracao, callback){
//     $('div').animate({width: `+= ${valor}`},duracao,(error, callback)=>{
//         if(error){
//             console.log(error)
//         } else {
//             alterarAltura(600, 1000,)
//         }
//     })
// }
// const animacoes = animacao => new Promise((resolve, reject)=>{
//     animacoes(animacao, (error, valor, duracao)=>{
//         if(error){
//             reject(error)
//         } else {
//             resolve(valor, duracao)
//         }
//     })
// })
// const promise = animacoes(alterarLargura){

// }


const animacoes = function alterarLargura (valor, duracao,callback) {
    $('div').animate({width: `+=${valor}`}, duracao,()=>{
        return alterarLargura(400, 1000)
    })
}
// animacoes()
// function moverDiagonal (valor, duracao, callback) {
//     $('div').animate({top: `+=${valor}`, left: `+=${valor}`}, duracao, callback)
// }