interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string //opcional
}

const pessoa: Pessoa = {
    nome: 'Samuel',
    idade: 17
}

const outraPessoa: Pessoa = {
    nome: 'Igor',
    idade: 21,
    profissao: 'Designer UI/UX'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2 , 3
]

const arrayString: Array<string> = [
    '1', '2', '3'

]