let a: [String, any] [] = [
    ['url', 'https://localhost'],
    ['port', 8080],
];

function funcao(){
    a.forEach(function (element){
        console.log(element[0])
    });
}



enum CardSuits{Clubs, Hearts, Spades, Diamonds}

function funcao2(){
    let x = 0;
    if(x === CardSuits.Clubs){
        alert('True')
    }else{
        alert('False')
    }
    console.log(CardSuits.Clubs)
}


funcao();
funcao2();