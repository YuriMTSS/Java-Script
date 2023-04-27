var carro = {
    portas: 4,
    marca: 'fiat'
}

var modelo
var ternario = carro.portas === 4? modelo = 'Modelo com 4 portas': modelo = 'Modelo com 2 portas';
console.log(ternario);