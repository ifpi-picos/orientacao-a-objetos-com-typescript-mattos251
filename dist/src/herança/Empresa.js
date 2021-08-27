"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome, ...funcionarios) {
        this.nome = nome;
        if (funcionarios) {
            this.funcionarios = funcionarios;
        }
    }
    getnome() {
        return this.nome;
    }
    adicionandofuncionario(funcionarios) {
        this.funcionarios.push(funcionarios);
    }
    getfuncionario() {
        return this.funcionarios;
    }
}
exports.Empresa = Empresa;
