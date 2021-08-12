function carro(){
    let velmax = 200;
    console.log(this.cor);
}
let detalhes = {
    cor:"Branco",
    marca:"Fiat",
    modelo:"Golf"
}
 let carrligar =carro.bind(detalhes)
 carrligar()
carro()