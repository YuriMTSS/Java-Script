

var obj = {
    idade: 25,
    nome: 'Ana',
    sobrenome: 'Clara',
    peso: 32.2,
    altura: 1.50,
    casado: false,
    aniversario: function(){
        obj.idade++;
    },
    nomeSN : function(){
        //obj.nome = obj.nome + " " + obj.sobrenome;
        return obj.nome + " " + obj.sobrenome;
    }
}

obj.aniversario();
console.log(obj);

obj.nomeSN();
console.log(obj);

