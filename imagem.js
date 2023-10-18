let imagemEstrada;
let imagemGalinha;
let imagemCarro = [];

let somTrilha;
let somColisao;
let somPonto;


function preload(){
    imagemEstrada  = loadImage("imagens/estrada.png");
    imagemGalinha = loadImage("imagens/ator1.png");
    imagemCarro.push(loadImage("imagens/carro-1.png"));
    imagemCarro.push(loadImage("imagens/carro-2.png")); // adiciona a variavel a lista
    imagemCarro.push(loadImage("imagens/carro-3.png"));
    imagemCarro.push(loadImage("imagens/carro-1.png"));
    imagemCarro.push(loadImage("imagens/carro-2.png"));
    imagemCarro.push(loadImage("imagens/carro-3.png"));

    somTrilha = loadSound("sons/trilha.mp3");
    somColisao = loadSound("sons/colidiu.mp3");
    somPonto = loadSound("sons/pontos.wav");
    
}

