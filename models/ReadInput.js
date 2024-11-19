const readline = require('readline') 

class ReadInput {
    constructor(){
        this.entrada = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    read(text) {
        return new Promise((resolve) => {
            this.entrada.question(`${text}`, (dado) => {
                resolve(dado)
            })
        })
    }

    close() {
        this.entrada.close()
    }

    esperar() {
        return new Promise(resolve => {
            this.entrada.question('\nPressione Enter para continuar...', () => {
                resolve()
            });
        });
    }
}

module.exports = ReadInput