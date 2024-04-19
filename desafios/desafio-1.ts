/*
    Criar um objeto funcionário com:
      - Array de strings com os nomes dos supervisores
      - Função de bater ponto que recebe a hora (número)
        e retorna uma string
        -> Ponto normal (<= 8)
        -> Fora do horario (> 8)
*/

// Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário!'
    }
  }
}

let funcionario2: Funcionario = {
  supervisores: ['Marcos', 'André'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário!'
    }
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))