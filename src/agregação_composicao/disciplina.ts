import { Professores } from "./Professores"

export class Disciplina {
    private nome: string
    private ch: number
    private professor: Professores
  
    constructor (nome: string, ch: number, professor: Professores) {
      this.nome = nome
      this.ch = ch
      this.professor = professor
    }
  
    getNome () {
      return this.nome
    }

  }

