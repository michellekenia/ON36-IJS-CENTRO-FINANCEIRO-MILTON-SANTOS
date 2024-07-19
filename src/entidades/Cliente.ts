class Cliente {
   private nome: string
   private id: number
   private endereco: string
   private telefone: string

    constructor(nome: string, id: number, endereco: string, telefone: string){
        this.nome = nome
        this.id = id
        this.endereco = endereco
        this.telefone = telefone

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


}