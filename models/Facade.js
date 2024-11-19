const ReadInput = require('./ReadInput')
const Contato = require('./Contato')
const GerenciadorContatos = require('./GerenciadorContatos')

class Facade{

    constructor() {
        this.gerContatos = new GerenciadorContatos()
        this.readLine = new ReadInput()
        this.opcao = ''
    }

    async adicionarContato(){
        const contato = new Contato(await this.readLine.read('Nome: '), await this.readLine.read('Telefone: '), await this.readLine.read('Email: '))
        this.gerContatos.adicionarContato(contato)
    }

    async removerContato(){
        let nome = await this.readLine.read('Informe o nome do contato a ser excluido: ')
        this.gerContatos.removerContato(nome)
    }

    async buscarContato(){
        let nome = await this.readLine.read('Informe o nome do contato: ')
        this.gerContatos.buscarContato(nome)
    }

    async listarContatos(){
        this.gerContatos.listarContatos()
    }

    async iniciar(){
        do{
            console.log('\n\nSELECIONE UMA OPÇÃO:\n1 - Adicionar contato\n2 - Remover contato\n3 - Buscar contato\n4 - Listar contatos\n0 - Sair')
            this.opcao = await this.readLine.read('\nOpção: ')
    
            switch(this.opcao) {
                case '1':
                    console.log('\nNOVO CONTATO')
                    await this.adicionarContato()
                    break
                case '2':
                    console.log('\nREMOVER CONTATO')
                    await this.removerContato()
                    await this.readLine.esperar()
                    break
                case '3':
                    console.log('\nBUSCAR CONTATO')
                    await this.buscarContato()
                    await this.readLine.esperar()
                    break
                case '4':
                    console.log('\nLISTA DE CONTATOS')
                    this.listarContatos()
                    await this.readLine.esperar()
                    break
                case '0':
                    break
                default:
                    console.log('OPÇÃO INVÁLIDA')
                    await this.readLine.esperar()
            }
        } while(this.opcao != '0');

        await this.readLine.close()
    }
}

module.exports = Facade