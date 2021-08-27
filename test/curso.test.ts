/* globals describe, expect, it */
import { Curso } from '../src/agregação_composicao/curso'
import { Disciplina } from '../src/agregação_composicao/disciplina'
import { Professores } from '../src/agregação_composicao/Professores'

describe('teste curso', () => {
  const NOME_CURSO_ADS = 'ADS'
  const NOME_DISCIPLINA_WEB = 'Web'
  const NOME_DISCIPLINA_ES = 'Enenharia de Software'
  const NOME_PROFESSOR = 'spiliquide'
  const CARGA_HORARIA = 130

  it('deve criar um curso com o nome ADS', () => {
    const curso = new Curso(NOME_CURSO_ADS)
    expect(curso.getNome()).toBe(NOME_CURSO_ADS)
  })

  it('deve criar um professor com o nome ADS', () => {
    const jobotron = new Professores(NOME_PROFESSOR)
    expect(jobotron.getnome()).toBe('spiliquide')
  })

  it('deve adicionar uma disciplina ao curso', () => {
    const professor = new Professores(NOME_PROFESSOR)
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CARGA_HORARIA, professor)
    curso.adicionaDisciplina(web)
    expect(curso.getDisciplinas().length).toBe(1)
    expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB)
  })

  it('deve adicionar duas disciplina ao curso', () => {
    const professor = new Professores(NOME_PROFESSOR)
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CARGA_HORARIA, professor)
    const es = new Disciplina(NOME_DISCIPLINA_ES, CARGA_HORARIA, professor)
    curso.adicionaDisciplina(web)
    curso.adicionaDisciplina(es)
    expect(curso.getDisciplinas().length).toBe(2)
  })

  it('deve remover uma disciplina do curso', () => {
    const professor = new Professores(NOME_PROFESSOR)
    const curso = new Curso(NOME_CURSO_ADS)
    const web = new Disciplina(NOME_DISCIPLINA_WEB, CARGA_HORARIA, professor)
    curso.adicionaDisciplina(web)
    expect(curso.getDisciplinas().length).toBe(1)
    expect(curso.getDisciplinas()[0].getNome()).toBe(NOME_DISCIPLINA_WEB)
    curso.removeDisciplina(web)
    expect(curso.getDisciplinas().length).toBe(0)
  })
})
