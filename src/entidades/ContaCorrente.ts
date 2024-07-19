class ContaCorrente extends ContaBancaria {

    private limiteChequeEspecial: number

    constructor(numeroConta: string, idAgencia: number, cliente: Cliente, limiteChequeEspecial: number){

        super(numeroConta, idAgencia, cliente, "Corrente")
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    public depositar(valor: number): void {
        
    }

    public sacar(valor: number): void {
        
    }

    public transferir(valor: number, contaDestino: ContaBancaria): void {
        
    }


}