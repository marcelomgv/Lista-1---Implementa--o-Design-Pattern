const readline = require('readline')
const Contato = require('./models/Contato')
const GerenciadorContatos = require('./models/GerenciadorContatos')

const gerContatos = new GerenciadorContatos()

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const adicionarContato = () => {
    entrada.question('Nome: ', (nome) => {
        entrada.question('Telefone: ', (telefone) => {
            entrada.question('Email: ', (email) => {
                const contato = new Contato(nome, telefone, email)
                gerContatos.adicionarContato(contato)
                entrada.close()
            })
        })
    })
}

const listarContatos = () => {
    console.log('LISTA DE CONTATOS')
    gerContatos.listarContatos()
}

do{
    entrada.question('SELECIONE UMA OPÇÃO:\n1 - Adicionar contato\n2 - Remover contato\n3 - Buscar contato\n4 - Listar contatos', (opcao) => {
        
    })
    console.log()

} while()
adicionarContato()
listarContatos()
