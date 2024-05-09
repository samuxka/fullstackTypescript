import { contaComum } from "./contaDioBank"

export class ContaPessoa extends contaComum {
    doc_id: number;
  
    constructor(doc_id: number, name: string, accountNumber: number) {
      super(name, accountNumber);
      this.doc_id = doc_id;
    }
  }