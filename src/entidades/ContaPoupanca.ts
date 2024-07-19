class ContaPoupanca extends ContaBancaria {
    private taxaJuros: number

    constructor(numeroConta: string, idAgencia: number, cliente: Cliente, taxaJuros: number) {
        super(numeroConta, idAgencia, cliente, "Poupança")
        this.taxaJuros = taxaJuros
    }

    public depositar(valor: number): void {
        
    }

    public sacar(valor: number): void {
        
    }

    public transferir(valor: number, contaDestino: ContaBancaria): void {
        
    }
    
}