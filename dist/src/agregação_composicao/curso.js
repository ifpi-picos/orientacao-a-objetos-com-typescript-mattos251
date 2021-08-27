"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor(nome) {
        this.nome = nome;
        this.disciplinas = [];
    }
    getNome() {
        return this.nome;
    }
    adicionaDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }
    getDisciplinas() {
        return this.disciplinas;
    }
    removeDisciplina(disciplina) {
        let index = this.disciplinas.indexOf(disciplina);
        if (index > -1) {
            this.disciplinas.splice(index, 1);
        }
        else {
            return console.log("Não encontrado");
        }
    }
}
exports.Curso = Curso;
