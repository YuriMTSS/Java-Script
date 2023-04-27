var arr = ["Julio", "Cesar", "Moreira", 1,2,3,5,4];

function attArr (){
    arr.push('Valor adicionado');
    arr.push(function soma(x , y){return x + y});
    arr.push([2,3,4,5]);
    return arr;
}

console.log(attArr());


for(var n = 2; n < 10; n ++){
    console.log(n);
}

for(var n = 2, m = 3; n < 10; n ++){
    console.log(n);
    console.log(m++);
}