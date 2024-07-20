class ContaPoupanca extends ContaBancaria {
    private taxaJuros: number

    constructor(numeroConta: string, idAgencia: number, taxaJuros: number, saldo: number) {
        super(numeroConta, idAgencia, saldo)
        this.taxaJuros = taxaJuros
    }

    public depositar(valor: number): void {
        
    }

    public sacar(valor: number): void {
        
    }

    public transferir(valor: number, contaDestino: ContaBancaria): void {
        
    }
    
}