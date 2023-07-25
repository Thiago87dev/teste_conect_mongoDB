const mongoose = require('mongoose')
const HomeSchema = mongoose.Schema({
    Titulo: {type: String, required: true},
    Descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema)

class Home{

}

module.exports = Home