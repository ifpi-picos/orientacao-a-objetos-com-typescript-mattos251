import { Funcionario } from "./Funcionario";

export class Pf extends Funcionario{

    private cpf: string

    constructor(nome: string, salario:number, cpf: string, beneficios: string[] ){
        super(nome, salario, beneficios );
        this.cpf = cpf

    }

    getSalarioLiquido (){
        return super.getSalario() -  super.getSalario() * 0,1  
    }

}