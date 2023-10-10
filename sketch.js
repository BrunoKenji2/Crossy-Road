let imagemEstrada;
let imagemGalinha;
let imagemCarro;

function preload(){
    imagemEstrada  = loadImage("imagens/estrada.png");
    imagemGalinha = loadImage("imagens/ator1.png");
    imagemCarro = loadImage("imagnes/carro-1.png");
}

function setup(){
    createCanvas(500,400);

}

function draw(){
    background(imagemEstrada);
}