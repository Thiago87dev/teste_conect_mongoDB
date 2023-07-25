exports.middlewareGlobal = (req, res, next) => {
    if (req.body.nome) {
        req.body.nome = req.body.nome.replace('Thiago', 'O rei Thiago')
        console.log(`Vi que o nome é ${req.body.nome}`);
    }
    next()
}

exports.outroMiddleware = (req, res, next) => {
    next()
}