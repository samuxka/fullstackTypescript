export abstract class dioAccount {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (): void => {
        console.log('You deposited')
    }

    withdraw = (): void => {
        console.log('You got it')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }
}