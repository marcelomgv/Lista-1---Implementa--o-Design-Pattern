const Facade = require('./models/Facade')

const main = async () => {
    const AppContatos = new Facade()
    await AppContatos.iniciar()
}

main()