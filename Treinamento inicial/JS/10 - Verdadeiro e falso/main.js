var numero = 1
var booleano
function func(){
    if(numero === 1){
        return true
    }else{
        return false
    }
}


function func1(){
    if(numero){
        booleano = true
        console.log(booleano)
    }else{
        booleano = false
        console.log(booleano)
    }
}

func();
func1();
