"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* globals describe, expect, it */
const disciplina_1 = require("../src/agrega\u00E7\u00E3o_composicao/disciplina");
const Professores_1 = require("../src/agrega\u00E7\u00E3o_composicao/Professores");
describe('teste disciplina', () => {
    it('deve criar uma disciplina com o nome web', () => {
        const NOME_DISCIPLINA = 'Web';
        const CARGA_HORARIA = 130;
        const NOME_PROFESSOR = 'spiliquide';
        const professor = new Professores_1.Professores(NOME_PROFESSOR);
        const disciplina = new disciplina_1.Disciplina(NOME_DISCIPLINA, CARGA_HORARIA, professor);
        expect(disciplina.getNome()).toBe(NOME_DISCIPLINA);
    });
});
