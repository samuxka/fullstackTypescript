import { contaComum } from "./contaDioBank"

export class ContaEmpresa extends contaComum {
    constructor(name: string, accountNumber: number) {
      super(name, accountNumber);
    }
  
    getLoan(): void {
      console.log("Você pegou um empréstimo");
    }
  }