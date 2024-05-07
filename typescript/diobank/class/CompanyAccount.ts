import { dioAccount } from "./DioAccount"

export class CompanyAccount extends dioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('You took out a loan')
    }

    deposit = (): void => {
        console.log('The company deposited')
    }
}