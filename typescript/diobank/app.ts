import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Samuel', 10)
//peopleAccount.deposit()
console.log(peopleAccount)
peopleAccount.setName('Samuel Oliveira')

console.log(peopleAccount)
// const companyAccount = new CompanyAccount('Samukinha Company', 20)
// console.log(companyAccount.deposit())

