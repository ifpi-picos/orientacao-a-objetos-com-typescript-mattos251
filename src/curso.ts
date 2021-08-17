import { Disciplina } from './disciplina'

export class Curso {
  private nome: string
  private disciplinas: Disciplina[]

  constructor (nome: string) {
    this.nome = nome
    this.disciplinas = []
  }

  getNome () {
    return this.nome
  }

  adicionaDisciplina (disciplina: Disciplina) {
    this.disciplinas.push(disciplina)
  }

  getDisciplinas () {
    return this.disciplinas
  }

  removeDisciplina (disciplina: Disciplina){
    let index = this.disciplinas.indexOf(disciplina)
    if(index > -1){
        this.disciplinas.splice(index, 1)
    }else{
        return console.log("Não encontrado")
    }
  }
}