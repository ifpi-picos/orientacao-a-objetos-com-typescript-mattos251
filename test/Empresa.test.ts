/* globals describe, expect, it */
import { Empresa } from '../src/herança/Empresa'
import { Funcionario } from '../src/herança/Funcionario'
import { Pf } from '../src/herança/Pf'
import { Pj } from '../src/herança/Pj'

describe('teste de empresa', () => {
  const nomeEmpresa = 'magicbolo'
  let nomeFuncionario1: Funcionario
  let nomeFuncionario2: Funcionario
  const beneficiosPF: string[] = ["plano de saude", "VR", "ferias"]
  const beneficiosPJ: string[] = ["plano de saude"]

  it('dave criar uma empresa', () => {
    const empresa = new Empresa(nomeEmpresa)
    expect(empresa.getnome()).toBe(nomeEmpresa)
  })

  it('verificando se há algum funcionario cadastrado', () => {
    const empresa = new Empresa(nomeEmpresa)
    expect(empresa.getfuncionario().length).toBe(0)
    console.log(empresa.getfuncionario())
  })
  
  it('criando empresa com os parametros dos funcionarios', () => {
    nomeFuncionario1 = new Pf("gertrudes", 3000, "12324215151", beneficiosPF)
    let funcionarios: Funcionario[] = [nomeFuncionario1]
    //funcionarios.push(nomeFuncionario1)
    const empresa = new Empresa(nomeEmpresa, nomeFuncionario1)
    expect(empresa.getfuncionario()).toStrictEqual(funcionarios)
    console.log(funcionarios)
  })

  it('criando empresa com outro funcionario', () => {
    nomeFuncionario2 = new Pj("eufagenia", 5000, beneficiosPJ, "24235352423")
    let funcionarios: Funcionario[] = [nomeFuncionario2]
    //funcionarios.push(nomeFuncionario1)
    const empresa = new Empresa(nomeEmpresa, nomeFuncionario2)
    expect(empresa.getfuncionario()).toStrictEqual(funcionarios)
    console.log(funcionarios)
  })

})
