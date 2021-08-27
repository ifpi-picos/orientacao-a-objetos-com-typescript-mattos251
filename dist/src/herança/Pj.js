"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pj = void 0;
const Funcionario_1 = require("./Funcionario");
class Pj extends Funcionario_1.Funcionario {
    constructor(nome, salario, beneficios, cnpj) {
        super(nome, salario, beneficios);
        this.cnpj = cnpj;
    }
    getSalarioLiquido() {
        return super.getSalario() - super.getSalario() * 0.05;
    }
}
exports.Pj = Pj;
