class GerenciadorContatos {
    constructor(){
        this.listaContatos = []
    }

    adicionarContato(contato) {
        this.listaContatos.push(contato)
    }

    removerContato(nome) {
        const index = this.listaContatos.findIndex((contato) => contato.nome == nome)
        if(index == -1){
            console.log(`\nContato com o nome ${nome} não encontrado em sua lista de contatos`)
        }
        else {
            this.listaContatos.splice(index, 1)
            console.log(`\nContato com o nome ${nome} excluido com sucesso`)
        }
    }

    listarContatos() {
        if(this.listaContatos.length == 0) {
            console.log('\nNenhum contato listado')
        }
        else {
            for (let contato of this.listaContatos){
                console.log(`\nNome: ${contato.nome}\nTelefone: ${contato.telefone}\nEmail: ${contato.email}`)
            }
        }
    }
}

module.exports = GerenciadorContatos