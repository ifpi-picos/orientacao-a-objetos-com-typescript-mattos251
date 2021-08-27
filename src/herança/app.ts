import { Empresa } from "./Empresa"
import { Funcionario } from "./Funcionario"
import { Pj } from "./Pj" 
import { Pf } from "./Pf"

let beneficiosPF: string[] = ["plano de saúde", "VR","Férias" ]
let benefeciosPJ: string[] = ["Plano de saúde"]

let soquilits: Empresa = new Empresa('soquilits')
let gertrudes: Funcionario
let Music: Funcionario

try{
    gertrudes = new Pf("gertrudes", 5000, '098765423445', beneficiosPF)
    Music = new Pj("Music", 5000, benefeciosPJ, "23456787653421")
    soquilits.adicionandofuncionario(gertrudes)
    soquilits.adicionandofuncionario(Music)
    gertrudes.setBeneficios('forabolsonaro')

}catch(e){
    console.error(e)
}

soquilits.getfuncionario().forEach(value => {
    console.log("Nome: " + value)
    console.log("Salário: " + value)
    console.log("Identificador: " + value)
});
