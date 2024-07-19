abstract class ContaBancaria {
    
    protected numeroConta: string
    protected idAgencia: number    
    protected saldo: number
    protected dataAbertura: Date
    protected cliente: Cliente
    protected tipoConta: string

    constructor(numeroConta: string, idAgencia: number, cliente: Cliente, tipoConta: string){
        this.numeroConta = numeroConta
        this.idAgencia = idAgencia
        this.saldo = 0
        this.cliente = cliente
        this.dataAbertura = new Date()
        this.tipoConta = tipoConta
        
    }

    //Método para consultar saldo 
    public consultarSaldo(): number {
        return this.saldo
    }

    //Método abstrato para sacar valor da conta
    public abstract sacar(valor: number): void

    //Método abstrato para depositar valor da conta
    public abstract depositar(valor: number): void

    //Método abstrato para transferir valor da conta para outra
    public abstract transferir(valor: number, contaDestino: ContaBancaria): void

}