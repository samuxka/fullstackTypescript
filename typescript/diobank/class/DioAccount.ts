export abstract class dioAccount {
    private name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('New name saved')
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