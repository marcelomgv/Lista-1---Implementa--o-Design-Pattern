class GerenciadorContatos {
    constructor(){
        this.listaContatos = []
    }

    adicionarContato(contato) {
        this.listaContatos.push(contato)
    }

    removerContato(contato) {
        this.listaContatos.splice(this.listaContatos.indexOf(contato), 1)
    }

    listarContatos() {
        if(this.listaContatos.length == 0) {
            console.log('Nenhum contato listado')
        }
        else {
            for (let contato of this.listaContatos){
                console.log(`\nNome: ${contato.nome}\nTelefone: ${contato.telefone}\nEmail: ${contato.email}`)
            }
        }
    }
}

module.exports = GerenciadorContatos