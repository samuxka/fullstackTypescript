export abstract class contaComum {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;
  
    constructor(name: string, accountNumber: number) {
      this.name = name;
      this.accountNumber = accountNumber;
    }
  
    deposit(amount: number): void {
      if (this.validateStatus()) {
        this.balance += amount;
        console.log(`Você depositou ${amount}`);
      }
    }
  
    withdraw(amount: number): void {
      if (this.validateStatus()) {
        if (this.balance >= amount) {
          this.balance -= amount;
          console.log(`Você sacou ${amount}`);
        } else {
          console.log("Saldo insuficiente.");
        }
      }
    }
  
    getBalance(): void {
      console.log(`Seu saldo é ${this.balance}`);
    }
  
    private validateStatus(): boolean {
      if (this.status) {
        return true;
      }
      throw new Error("Conta inválida");
    }
  }
