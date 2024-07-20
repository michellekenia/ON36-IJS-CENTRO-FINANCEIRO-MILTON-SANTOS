class ContaPoupanca extends ContaBancaria {
    private taxaJuros: number
    private rendimento!: number

    constructor(numeroConta: string, idAgencia: number, taxaJuros: number, saldo: number) {
        super(numeroConta, idAgencia, saldo)
        this.taxaJuros = taxaJuros
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor 
        }  else {
        throw new Error ("O valor deve ser maior do que zero.")
        }
    }

    public sacar(valor: number): void {
        if (valor <= 0 ) {
            throw new Error ("O valor deve ser maior do que zero.")
        } if (valor > (this.saldo)) {
            throw new Error ("Você não tem saldo o suficiente.")
        } else {
            this.saldo -= valor
        }
    }

    public transferir(valor: number, contaDestino: ContaBancaria): void {
        if (valor < this.saldo) {
            this.sacar(valor)
            contaDestino.depositar(valor)
        } else {
        throw new Error ("Não há saldo suficiente.")
    }
    }
    
    public calcularRendimento(): void {
        const juros = this.saldo * (this.taxaJuros/100)
        this.rendimento += juros
        this.depositar(juros)      
    }

}