// const num: number = 15

// if (num > 15){
//     console.log('numero maior que 15')
// }else if(num === 15){
//     console.log('numero igual a 15')
// }else{
//     console.log('numero menor que 15')
// }

var adm = 'Samuel'

const typeUser = {
    admin: 'Seja bem vindo ' + adm,
    student: 'Você é um estudante',
    viewer: 'Você pode apenas visualizar'
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')