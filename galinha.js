
//galinha
let posxGalinha = 200;
let posyGalinha = 370;
let colisao = false;
let pontos = 0;

function moveAtor(){
    if(keyIsDown(DOWN_ARROW)){
        if(posyGalinha < 370 ){
        posyGalinha = posyGalinha + 2;
        }
    }

    if(keyIsDown(UP_ARROW)){
        posyGalinha = posyGalinha - 2;
    }

    if(keyIsDown(LEFT_ARROW)){
        if(posxGalinha > 0){
        posxGalinha = posxGalinha - 2;
        }
    }

    if(keyIsDown(RIGHT_ARROW)){
        if(posxGalinha < 470){
        posxGalinha = posxGalinha + 2;
        }
    }
}

// usando a biblioteca do P5 para colisoes
function bateu(){
    for(let i = 0; i < imagemCarro.length; i++){
        colisao = collideRectRect(posxCarro[i],posyCarro[i],larguraCarro,alturaCarro,posxGalinha,posyGalinha,20,20  );
        if(colisao){
            posxGalinha = 200;
            posyGalinha = 370;
            colisao = false;
            pontos--;
            somColisao.play();
        }
    }
}

function vitoria(){

    if(posyGalinha < 0){
        pontos++;
        somPonto.play();
        posxGalinha = 200;
        posyGalinha = 370;
    }

}

function mostraPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(255,255,0);
    text(pontos,100,27);
}