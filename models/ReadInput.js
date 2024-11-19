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
        entrada.close()
    }
}

module.exports = ReadInput