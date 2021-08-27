"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
class Disciplina {
    constructor(nome, ch, professor) {
        this.nome = nome;
        this.ch = ch;
        this.professor = professor;
    }
    getNome() {
        return this.nome;
    }
}
exports.Disciplina = Disciplina;
