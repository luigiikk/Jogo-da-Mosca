// Criar variável fora do escopo da função

var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMoscaTempo = 1500
}else if(nivel === 'dificil') {
    criaMoscaTempo = 1000
}else if(nivel === 'impossivel') {
    criaMoscaTempo = 750
}

function ajustarTamanho() {

    // adicionar a variavel dentro da função para saber a altura e largura (colocar a função no body)

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustarTamanho()

var cronometro = setInterval(function(){

    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
}, 1000)




function posicaoRandomica() {

    // remover a mosca anterior (caso exista)
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if(vidas > 3) {

            window.location.href = 'fimdejogo.html'

        } else {
            document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
            vidas++
        }
       
    }
    


    // criando posições do eixo x e y de forma paralela com a largura e altura
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

 // criar o elemento html
var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio() + " " + ladoAleatorio()
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
mosca.id = 'mosca'
mosca.onclick = function () {
    this.remove()
}

document.body.appendChild(mosca)

}


// tamanho aleatório

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2: 
            return 'mosca3'    
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'   
    }
}
