function arr(){
    return [1,2,3,4,5,6,7,8,9,10]
}

console.log(arr()[3]);

function calculo(){
    var soma = arr()[3] + arr()[6];
    return soma;
}

console.log(calculo());

function objeto(){
    return {
        idade: 25,
        peso: 30.0,
        nome: 'Fernando'
    }
}

console.log(objeto());