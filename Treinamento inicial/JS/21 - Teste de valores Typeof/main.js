var nome = 'Julio';
var numero = String(10);

document.write(`<h1>${typeof nome}</h1>`);
document.write(`<h1>${typeof numero}</h1>`);


function somar(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        resultado = num1 + num2;
        document.write(`<h1>O resultado da soma é: ${resultado}</h1>`);
    }else{
        document.write(`<h1>Os valores fornecidos não são numericos.</h1>`);
    }
}

somar(100,100);
somar('Julio', 100);