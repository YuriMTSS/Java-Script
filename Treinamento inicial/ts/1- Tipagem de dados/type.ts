class Default{
    qualquer: any;
    texto: String;
    numero: number;
    booleano: boolean;
    array: Array<any>;
    array2: any[];
    array3: any[];

    constructor(){
        this.metodo();
    }
    metodo(){
        this.qualquer = 5;
        this.qualquer = true;
        this.texto = `Teste ${this.numero}`;
        this.numero = 1;
        this.booleano = false;
        this.array = [1, '2', true, 2.2];
        this.array2 = [2, '3', false, 2.3];
        this.array3 = [
            {
                "Teste": 1,
            }
        ];
        return alert(this.texto);
    }
}