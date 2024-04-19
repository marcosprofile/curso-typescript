let nome: string = 'Marcos'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
// idade = 'Marcos'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = '27'

let hobbies: any[] = ['Jogar Video Game', 'Ler', 'Estudar']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ['Av. Principal', 99, '']
console.log(endereco)

endereco = ['Rua X', 1260, 'Bloco A']
console.log(endereco)

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 2, //2
  Laranja, // 3
  Amarelo, // 4
  Vermelho = 100 // 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {
  marca: 'BMW',
  ano: 2020
}
console.log(carro)

// funções
function retornaMeuNome(): string {
  // return minhaIdade
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2.5, 9))

const teste = function (a: number, b: number): boolean {
  return false
}

// tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo()
// calculo = {}

calculo = multiplicar
console.log(calculo(5, 5))

// objetos
let usuario: { nome: string, idade: number } = {
  nome: 'João',
  idade: 27
}
console.log(usuario)
// usuario = {}

/* usuario = {
  name: 'Maria',
  age: 31
} */

usuario = {
  idade: 31,
  nome: 'Maria'
}
console.log(usuario)

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`, typeof nota)
nota = '10'
console.log(`Minha nota é ${nota}!`, typeof nota)

// Checando tipos
let valor = 30

if (typeof valor === 'number') {
  console.log('É um valor number!')
} else {
  console.log(typeof valor)
}

// never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 4,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) {
      falha('O produto precisa ter um nome.')
    }
    if(this.preco <= 0) {
      falha('Preço inválido!')
    }
  }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Marcos',
  tel1: '11912349876',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)