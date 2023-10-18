
function setup(){
    createCanvas(500,400);
    somTrilha.loop();
}

function draw(){
    background(imagemEstrada);
    mostraCarro();
    image(imagemGalinha,posxGalinha,posyGalinha,30,30); //x/y//largura//altura
    movimentaCarro();
    moveAtor();
    bateu();
    mostraPontos();
    vitoria();
}
