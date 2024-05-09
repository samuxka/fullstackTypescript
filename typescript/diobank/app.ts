import { ContaEmpresa } from './class/Empresa'
import { ContaPessoa } from './class/Pessoa'
import { contaBonus } from './class/Especial'


const peopleAccount: ContaPessoa = new ContaPessoa(1, "Samuel", 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
peopleAccount.getBalance();
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const companyAccount: ContaEmpresa = new ContaEmpresa("EmpresaDio", 20);
companyAccount.deposit(5000);
companyAccount.getBalance();
companyAccount.getLoan();

const bonusAccount: contaBonus = new contaBonus("BonusAccount", 30);
bonusAccount.deposit(1000);
bonusAccount.getBalance();
