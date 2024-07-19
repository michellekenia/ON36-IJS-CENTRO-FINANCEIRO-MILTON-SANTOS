class ContaBancaria {
    
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

}