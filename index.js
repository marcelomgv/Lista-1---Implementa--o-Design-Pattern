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

    const removerContato = async () => {
        let nome = await readLine.read('Informe o nome do contato a ser excluido: ')
        gerContatos.removerContato(nome)
    }

    const buscarContato = async () => {
        let nome = await readLine.read('Informe o nome do contato: ')
        gerContatos.buscarContato(nome)
    }

    const listarContatos = () => {
        gerContatos.listarContatos()
    }

    do{
        console.log('\n\nSELECIONE UMA OPÇÃO:\n1 - Adicionar contato\n2 - Remover contato\n3 - Buscar contato\n4 - Listar contatos\n0 - Sair')
        opcao = await readLine.read('\nOpção: ')

        switch(opcao) {
            case '1':
                console.log('\nNOVO CONTATO')
                await adicionarContato()
                break
            case '2':
                console.log('\nREMOVER CONTATO')
                await removerContato()
                await readLine.esperar()
                break
            case '3':
                console.log('\nBUSCAR CONTATO')
                await buscarContato()
                await readLine.esperar()
                break
            case '4':
                console.log('\nLISTA DE CONTATOS')
                listarContatos()
                await readLine.esperar()
                break
            case '0':
                break
            default:
                console.log('OPÇÃO INVÁLIDA')
                await readLine.esperar()
        }
    } while(opcao != '0');

    readLine.close()
}

main()