"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* globals describe, expect, it */
const curso_1 = require("../src/agrega\u00E7\u00E3o_composicao/curso");
const disciplina_1 = require("../src/agrega\u00E7\u00E3o_composicao/disciplina");
const Professores_1 = require("../src/agrega\u00E7\u00E3o_composicao/Professores");
describe('teste curso', () => {
    const NOME_CURSO_ADS = 'ADS';
    const NOME_DISCIPLINA_WEB = 'Web';
    const NOME_DISCIPLINA_ES = 'Enenharia de Software';
    const NOME_PROFESSOR = 'spiliquide';
    const CARGA_HORARIA = 130;
    it('deve criar um curso com o nome ADS', () => {
        const curso = new curso_1.Curso(NOME_CURSO_ADS);
        expect(curso.getNome()).toBe(NOME_CURSO_ADS);
    });
    it('deve criar um professor com o nome ADS', () => {
        const jobotron = new Professores_1.Professores(NOME_PROFESSOR);
        expect(jobotron.getnome()).toBe('spiliquide');
    });
    it('deve adicionar uma disciplina ao curso', () => {
        const professor = new Professores_1.Professores(NOME_PROFESSOR);
        const curso = new curso_1.Curso(NOME_CURSO_ADS);
        const web = new disciplina_1.Disciplina(NOME_DISCIPLINA_WEB, CARGA_HORARIA, professor);
        curso.adicionaDisciplina(web);
        expect(curso.getDisciplinas().length).toBe(1);
        expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB);
    });
    it('deve adicionar duas disciplina ao curso', () => {
        const professor = new Professores_1.Professores(NOME_PROFESSOR);
        const curso = new curso_1.Curso(NOME_CURSO_ADS);
        const web = new disciplina_1.Disciplina(NOME_DISCIPLINA_WEB, CARGA_HORARIA, professor);
        const es = new disciplina_1.Disciplina(NOME_DISCIPLINA_ES, CARGA_HORARIA, professor);
        curso.adicionaDisciplina(web);
        curso.adicionaDisciplina(es);
        expect(curso.getDisciplinas().length).toBe(2);
    });
    it('deve remover uma disciplina do curso', () => {
        const professor = new Professores_1.Professores(NOME_PROFESSOR);
        const curso = new curso_1.Curso(NOME_CURSO_ADS);
        const web = new disciplina_1.Disciplina(NOME_DISCIPLINA_WEB, CARGA_HORARIA, professor);
        curso.adicionaDisciplina(web);
        expect(curso.getDisciplinas().length).toBe(1);
        expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB);
        curso.removeDisciplina(web);
        expect(curso.getDisciplinas().length).toBe(0);
    });
});
