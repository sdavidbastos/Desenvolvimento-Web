const tela = document.querySelector('[wm-flappy]')
const passaro = document.querySelector('[wm-flappy] .passaro')
const items = document.querySelectorAll('.item')
items.forEach((item, index)=>{
    item.draggable = true
    item.id = item.id || `draggable-item-${index}`
    item.ondragstart = e =>{
        e.dataTransfer.setData('item-id',
        e.target.id)
    }
})
const dropzone = document.querySelector('[wm-flappy]')
dropzone.forEach(dropzone =>{
    dropzone.ondragover = e => e.preventDefaut()
    dropzone.ondrop = function(e){
        const id = e.dataTransfer.getData('item-id')
        const item = document.getElementById(id)
        dropzone.appendChild(item)
    }
})

//flappy bird
// Simular vôo do pássaro
const tela = document.querySelector('[wm-flappy]')
const passaro = document.querySelector('[wm-flappy] .passaro')
const altura = parseInt(passaro.style.bottom.replace('%', ''))
// Função abaixo simula a subida do passaro
addEventListener("keypress", function(event){
    const altura = parseInt(passaro.style.bottom.replace('%', ''))
    if(altura<90){
        passaro.style.bottom = `${altura+2}%` 
    }
})
// Simula a descida do passaro
