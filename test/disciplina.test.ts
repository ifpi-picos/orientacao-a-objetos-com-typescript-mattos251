/* globals describe, expect, it */
import { Disciplina } from '../src/disciplina'
import { Professores } from '../src/Professores'

describe('teste disciplina', () => {
  it('deve criar uma disciplina com o nome web', () => {
    const NOME_DISCIPLINA = 'Web'
    const CARGA_HORARIA = 130
    const NOME_PROFESSOR = 'spiliquide'
    const professor = new Professores(NOME_PROFESSOR)
    const disciplina = new Disciplina(NOME_DISCIPLINA, CARGA_HORARIA, professor)
    expect(disciplina.getNome()).toBe(NOME_DISCIPLINA)
  })
})
