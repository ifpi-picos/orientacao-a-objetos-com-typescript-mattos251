import { Curso } from './curso'
import { Disciplina } from './disciplina'
import { Professores } from './Professores'

const gertrudes = new Professores('gertrudes')
const spiliquide = new Professores('spiliqide')
const web = new Disciplina('Programação para Web', 213, gertrudes)
const es = new Disciplina('Engenharia de Software I', 344, spiliquide)
const ads = new Curso('ADS')
ads.adicionaDisciplina(web)
ads.adicionaDisciplina(es)

console.log('Curso: ', ads.getNome())
console.log('Disciplinas: ', ads.getDisciplinas())
