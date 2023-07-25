exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send(`Seu nome completo é ${req.body.nome} ${req.body.sobrenome}`)
}