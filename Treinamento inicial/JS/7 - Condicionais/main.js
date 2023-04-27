var x = 10;
var y = 20;

function teste(){
    if(x > 5){
        y = 30;
        alert('A variavel X é maior que 5', y);
    }else if(x === 5){
        alert('O valor é diferente de 5');
    } else if(x != 5 && x == 10){
        alert('O valor é ',x);
    } 
    else{
        alert('O valor é igual a ', x);
    }
}