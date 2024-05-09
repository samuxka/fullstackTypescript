import { contaComum } from "./contaDioBank"

export class contaBonus extends contaComum {
    constructor(name: string, accountNumber: number) {
      super(name, accountNumber);
    }
  
    deposit(amount: number): void {
      super.deposit(amount);
      console.log(`Você ganhou ${amount / 10} dioCoins de bônus.`);
    }
  }
  