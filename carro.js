// carro
let posxCarro = 420;
let posyCarro = 40;
let velocidade = -2;
// carro2
let posxCarro2 = 600;
let posyCarro2 = 96;
let velocidade2 = -4;
// carro3
let posxCarro3 = 600;
let posyCarro3 = 150;
let velocidade3 = -1.5;


let alturaCarro = 50;
let larguraCarro = 40;

function mostraCarro(){
    image(imagemCarro,posxCarro,posyCarro,alturaCarro,larguraCarro);
    image(imagemCarro2,posxCarro2,posyCarro2,alturaCarro,larguraCarro);
    image(imagemCarro3,posxCarro3,posyCarro3,alturaCarro,larguraCarro);
}
function movimentaCarro(){
    posxCarro += velocidade;
    posxCarro2 += velocidade2;
    posxCarro3 += velocidade3;

    if(posxCarro < -50){
        posxCarro = 600;
    }
    
    if(posxCarro2 < -50){
        posxCarro2 = 600;
    }
    
    if(posxCarro3 < -50){
        posxCarro3 = 600;
    }
    

}