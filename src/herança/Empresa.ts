import { Funcionario } from "./Funcionario"

export class Empresa{
    private nome: string
    private funcionarios: Funcionario []
    

    constructor(nome: string, ...funcionarios: Funcionario[]){
        this.nome = nome
        if (funcionarios){
            this.funcionarios = funcionarios
        } 
        
    }

    public getnome(): string{
        return this.nome
    }


    public adicionandofuncionario(funcionarios: Funcionario){
        this.funcionarios.push(funcionarios);
    }

    public getfuncionario(): Funcionario[]{
        return this.funcionarios
    }

}