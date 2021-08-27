"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario, beneficios) {
        this.salario = salario;
        this.beneficios = beneficios;
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    getBeneficios(beneficios) {
        return beneficios;
    }
    setBeneficios(beneficios) {
        this.beneficios.push(beneficios);
    }
}
exports.Funcionario = Funcionario;
