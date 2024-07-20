class ContaCorrente extends ContaBancaria {

    private limiteChequeEspecial: number

    constructor(numeroConta: string, idAgencia: number, saldo: number, limiteChequeEspecial: number){

        super(numeroConta, idAgencia, saldo)
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    public sacar(valor: number): void {
        if (valor <= 0 ) {
            throw new Error ("O valor deve ser maior do que zero.")
        } if (valor > (this.saldo + this.limiteChequeEspecial)) {
            throw new Error ("Você não tem saldo o suficiente.")
        } else {
            this.saldo -= valor
        }
        
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor 
        }  else {
        throw new Error ("O valor deve ser maior do que zero.")
        }
    
    }

    public transferir(valor: number, contaDestino: ContaBancaria): void {
        if (valor < this.saldo + this.limiteChequeEspecial) {
            this.sacar(valor)
            contaDestino.depositar(valor)
        }  else {
        throw new Error ("Não há saldo suficiente.")
    }

    }

}