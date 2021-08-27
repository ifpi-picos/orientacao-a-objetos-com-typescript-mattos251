"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = require("./Empresa");
const Pj_1 = require("./Pj");
const Pf_1 = require("./Pf");
let beneficiosPF = ["plano de saúde", "VR", "Férias"];
let benefeciosPJ = ["Plano de saúde"];
let soquilits = new Empresa_1.Empresa('soquilits');
let gertrudes;
let Music;
try {
    gertrudes = new Pf_1.Pf("gertrudes", 5000, '098765423445', beneficiosPF);
    Music = new Pj_1.Pj("Music", 5000, benefeciosPJ, "23456787653421");
    soquilits.adicionandofuncionario(gertrudes);
    soquilits.adicionandofuncionario(Music);
    gertrudes.setBeneficios('forabolsonaro');
}
catch (e) {
    console.error(e);
}
soquilits.getfuncionario().forEach(value => {
    console.log("Nome: " + value);
    console.log("Salário: " + value);
    console.log("Identificador: " + value);
});
