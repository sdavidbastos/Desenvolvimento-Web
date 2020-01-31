// Passo
// Fazer o passar se subir e descer
const tela = document.querySelector('[wm-flappy]')
addEventListener('keydow', e =>{
    const altura = tela.clientHeight
    console.log(altura)
})
// movimeto horizontal do passaro
/*while(altura>0 && altura<340){
    // Condicional para simular o voo e gravidade
    const teclado = addEventListener('keydown', e=>{
        console.log(teclado.e === true)
    })
    if(condicao){
        altura = altura + 10
        bird.style.top = `${altura}px`
    }else{
        altura = altura - 10
        bird.style.top = `${altura}px`
    }
    console.log(altura)
}*/