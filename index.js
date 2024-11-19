const ReadInput = require('./models/ReadInput')
const Contato = require('./models/Contato')
const GerenciadorContatos = require('./models/GerenciadorContatos')

const main = async () => {
    const gerContatos = new GerenciadorContatos()
    const readLine = new ReadInput()

    const adicionarContato = async () => {
        const contato = new Contato(await readLine.read('Nome: '), await readLine.read('Telefone: '), await readLine.read('Email: '))
        await readLine.close()
        gerContatos.adicionarContato(contato)
    }

    const listarContatos = () => {
        console.log('LISTA DE CONTATOS')
        gerContatos.listarContatos()
    }

    do{
        let opcao = readLine.read('SELECIONE UMA OPÇÃO:\n1 - Adicionar contato\n2 - Remover contato\n3 - Buscar contato\n4 - Listar contatos\n0 - Sair')
        switch(opcao) {
            case '1':
                await adicionarContato()
                break
            case '2':

                break
            case '3':

                break
            case '4':
                listarContatos()
                break
            case '0':
                break
            default:
                console.log('OPÇÃO INVÁLIDA')
        }
    } while(opcao != 0)
}
