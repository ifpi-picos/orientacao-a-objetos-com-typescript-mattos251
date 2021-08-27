"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pf = void 0;
const Funcionario_1 = require("./Funcionario");
class Pf extends Funcionario_1.Funcionario {
    constructor(nome, salario, cpf, beneficios) {
        super(nome, salario, beneficios);
        this.cpf = cpf;
    }
    getSalarioLiquido() {
        return super.getSalario() - super.getSalario() * 0, 1;
    }
}
exports.Pf = Pf;
