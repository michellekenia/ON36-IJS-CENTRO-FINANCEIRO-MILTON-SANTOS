class Cliente {
   private nome: string
   private id: number
   private endereco: string
   private telefone: string
   private conta: ContaBancaria

    constructor(nome: string, id: number, endereco: string, telefone: string, conta: ContaBancaria){
        this.nome = nome
        this.id = id
        this.endereco = endereco
        this.telefone = telefone
        this.conta = conta

    }

    public getNome(): string {
        return this.nome
    }

    public getId() : number {
        return this.id 
    }

    public getEndereco() : string {
        return this.endereco 
    }

    public getTelefone() : string {
        return this.telefone 
    }

    public getConta(): ContaBancaria {
        return this.conta
    }
    

}