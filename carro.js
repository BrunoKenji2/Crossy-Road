// carro
let posxCarro = [600,600,600,600,600,600];
let posyCarro = [40,96,150,210,270,318];
let velocidade = [-2,-4,-1.5,-1,-2,-5];

let alturaCarro = 50;
let larguraCarro = 40;
let i;

function mostraCarro(){
    for(i = 0;i < imagemCarro.length ; i++){
        image(imagemCarro[i],posxCarro[i],posyCarro[i],alturaCarro,larguraCarro);
    }
}
function movimentaCarro(){
    for(i = 0; i < imagemCarro.length; i++ ){
        posxCarro[i] += velocidade[i];  // movimenta o carro

        if(posxCarro[i]< -50){
            posxCarro[i] = 600; //reseta a posição do carro
        }
    }
}