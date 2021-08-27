"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curso_1 = require("./curso");
const disciplina_1 = require("./disciplina");
const Professores_1 = require("./Professores");
const gertrudes = new Professores_1.Professores('gertrudes');
const spiliquide = new Professores_1.Professores('spiliqide');
const web = new disciplina_1.Disciplina('Programação para Web', 213, gertrudes);
const es = new disciplina_1.Disciplina('Engenharia de Software I', 344, spiliquide);
const ads = new curso_1.Curso('ADS');
ads.adicionaDisciplina(web);
ads.adicionaDisciplina(es);
console.log('Curso: ', ads.getNome());
console.log('Disciplinas: ', ads.getDisciplinas());
