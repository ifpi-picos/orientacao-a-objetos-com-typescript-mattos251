"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* globals describe, expect, it */
const Empresa_1 = require("../src/heran\u00E7a/Empresa");
const Pf_1 = require("../src/heran\u00E7a/Pf");
const Pj_1 = require("../src/heran\u00E7a/Pj");
describe('teste de empresa', () => {
    const nomeEmpresa = 'magicbolo';
    let nomeFuncionario1;
    let nomeFuncionario2;
    const beneficiosPF = ["plano de saude", "VR", "ferias"];
    const beneficiosPJ = ["plano de saude"];
    it('dave criar uma empresa', () => {
        const empresa = new Empresa_1.Empresa(nomeEmpresa);
        expect(empresa.getnome()).toBe(nomeEmpresa);
    });
    it('verificando se há algum funcionario cadastrado', () => {
        const empresa = new Empresa_1.Empresa(nomeEmpresa);
        expect(empresa.getfuncionario().length).toBe(0);
        console.log(empresa.getfuncionario());
    });
    it('criando empresa com os parametros dos funcionarios', () => {
        nomeFuncionario1 = new Pf_1.Pf("gertrudes", 3000, "12324215151", beneficiosPF);
        let funcionarios = [nomeFuncionario1];
        //funcionarios.push(nomeFuncionario1)
        const empresa = new Empresa_1.Empresa(nomeEmpresa, nomeFuncionario1);
        expect(empresa.getfuncionario()).toStrictEqual(funcionarios);
        console.log(funcionarios);
    });
    it('criando empresa com outro funcionario', () => {
        nomeFuncionario2 = new Pj_1.Pj("eufagenia", 5000, beneficiosPJ, "24235352423");
        let funcionarios = [nomeFuncionario2];
        //funcionarios.push(nomeFuncionario1)
        const empresa = new Empresa_1.Empresa(nomeEmpresa, nomeFuncionario2);
        expect(empresa.getfuncionario()).toStrictEqual(funcionarios);
        console.log(funcionarios);
    });
});
