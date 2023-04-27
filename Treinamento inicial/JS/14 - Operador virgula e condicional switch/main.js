var a, b = 2, c = 3;
function func(){
    return (a += 1, a);
}

console.log(func());


function funcCase(){
    switch(x){
        case 1:
            console.log('Valor é igual a ' + x);
            break;
        case 2:
            console.log('O valor é diferente do informado.');
            break;
        default:
            console.log('Valor não encontrado.');
            break;
    }
}