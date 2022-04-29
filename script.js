var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var fundo = {
    url: "./imgs/fundo.png"
}

var vaca = {
    url: "./imgs/vaca.png"
}
var frango = {
    url: "./imgs/frango.png"
}
var porco ={
    url: "./imgs/porco.png"
}

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;
vaca.imagem = new Image();
vaca.imagem.src = vaca.url;
frango.imagem = new Image();
frango.imagem.src = frango.url;
porco.imagem = new Image();
porco.imagem.src =porco.url;


fundo.imagem.addEventListener("load", carregaFundo);
vaca.imagem.addEventListener("load", carregaVaca);
frango.imagem.addEventListener("load", carregaFrango);
porco.imagem.addEventListener("load",carregaPorco);

function carregaFundo(){
    papel.drawImage(fundo.imagem, 0, 0);
}

function carregaVaca(){
    var numeroVacas = numeroAleatorio(2, 10);

    for(var i=0; i<numeroVacas; i++){

        var xA = numeroAleatorio(50, 400);
        var yA = numeroAleatorio(100, 300);
        papel.drawImage(vaca.imagem, xA, yA);
    }
}
function carregaFrango(){
    var numeroFrango = numeroAleatorio(2, 16);

    for(var i=0; i<numeroFrango; i++){

        var xA = numeroAleatorio(100, 400);
        var yA = numeroAleatorio(100, 400);
        papel.drawImage(frango.imagem, xA, yA);
    }
}
function carregaPorco(){
    var numeroPorco = numeroAleatorio(2, 6);

    for(var i=0; i<numeroPorco; i++){

        var xA = numeroAleatorio(100, 400);
        var yA = numeroAleatorio(100, 400);
        papel.drawImage(porco.imagem, xA, yA);
    }
}
function numeroAleatorio(x, y){
    return Math.floor(Math.random()*(y-x)+1) + x;
}

var z = 10;

for(var i=0; i<z; i++){
    console.log(numeroAleatorio(100, 200))
}