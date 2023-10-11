
//galinha
let posxGalinha = 400;
let posyGalinha = 365;

function moveAtor(){
    if(keyIsDown(DOWN_ARROW)){
        posyGalinha = posyGalinha + 2;
    }

    if(keyIsDown(UP_ARROW)){
        posyGalinha = posyGalinha - 2;
    }

    if(keyIsDown(LEFT_ARROW)){
        posxGalinha = posxGalinha - 2;
    }

    if(keyIsDown(RIGHT_ARROW)){
        posxGalinha = posxGalinha + 2;
    }
}