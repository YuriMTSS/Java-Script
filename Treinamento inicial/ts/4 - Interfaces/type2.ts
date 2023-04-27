import { User } from "./type";

export class Cadastro implements User{
    name: string;
    age: number;
}

let x : User = {
    name: 'Ana',
    age: 13,
    active: true,
};