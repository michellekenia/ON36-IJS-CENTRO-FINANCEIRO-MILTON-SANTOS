abstract class ContaBancaria {
    
    private numeroConta: string
    private idAgencia: number    
    protected saldo: number

    constructor(numeroConta: string, idAgencia: number, saldo: number){
        this.numeroConta = numeroConta
        this.idAgencia = idAgencia
        this.saldo = saldo
        
    }

    public getNumeroConta(): string {
        return this.numeroConta
    }

    public setNumeroConta(numeroConta: string): void {
        this.numeroConta = numeroConta
    }

    public getIdAgencia(): number {
        return this.idAgencia
    }

    public setIdAgencia(idAgencia: number): void{
        this.idAgencia = idAgencia
    }

    public getsaldo(): number {
        return this.saldo
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo
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