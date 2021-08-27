export abstract class Funcionario{
  private nome: string
  private salario: number
  private beneficios: string[]

  constructor(nome: string, salario: number, beneficios: string[]){
    this.salario = salario
    this.beneficios = beneficios
    this.nome = nome
  }
  
  public getNome(): string{
      return this.nome
  }

  abstract getSalarioLiquido(): number

  public getSalario(): number{
      return this.salario
  }

  public setSalario(salario: number): void {
     this.salario = salario
  }

  public getBeneficios(beneficios: string[]): string[]{
      return beneficios
  }

  public setBeneficios(beneficios: string): void{
     this.beneficios.push(beneficios)
  }

  

}