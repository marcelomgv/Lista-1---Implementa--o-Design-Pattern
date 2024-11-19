const ReadInput = require('./models/ReadInput')
const Contato = require('./models/Contato')
const GerenciadorContatos = require('./models/GerenciadorContatos')

const main = async () => {
    const gerContatos = new GerenciadorContatos()
    const readLine = new ReadInput()
    let opcao = ''

    const adicionarContato = async () => {
        const contato = new Contato(await readLine.read('Nome: '), await readLine.read('Telefone: '), await readLine.read('Email: '))
        gerContatos.adicionarContato(contato)
    }

    const removerContato = () => {
        
    }

    const listarContatos = () => {
        console.log('LISTA DE CONTATOS')
        gerContatos.listarContatos()
    }

    do{
        console.log('\n\nSELECIONE UMA OPÇÃO:\n1 - Adicionar contato\n2 - Remover contato\n3 - Buscar contato\n4 - Listar contatos\n0 - Sair')
        opcao = await readLine.read('\nOpção: ')

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
                await readLine.esperar()
                break
            case '0':
                break
            default:
                console.log('OPÇÃO INVÁLIDA')
        }
    } while(opcao != '0');

    readLine.close()
}

main()