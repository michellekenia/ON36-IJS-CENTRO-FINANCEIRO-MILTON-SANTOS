class ContaCorrente extends ContaBancaria {

    private limiteChequeEspecial: number

    constructor(numeroConta: string, idAgencia: number, saldo: number, limiteChequeEspecial: number){

        super(numeroConta, idAgencia, saldo)
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    public sacar(valor: number): void {
    
    }

    public depositar(valor: number): void {
    }

    public transferir(valor: number, contaDestino: ContaBancaria): void {
        
    }
    
}