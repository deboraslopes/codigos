let jogos = [
    {id: '1', nome: 'Mario Word', lancamento: '21 de novembro de 1990'},
    {id: '2', nome: 'Sonic', lancamento: '23 de junho de 1991'},
    {id: '3', nome: 'Doom', lancamento: '10 de dezembro de 1993'}
]

const getJogos = () =>{
    return jogos
}

const getJogosById = (id) => {
    return jogos(id)
}

const createJogo = (novoJogo) => {
    jogos.push(novoJogo)
    return jogos
}

const updateJogo = (id, jogo) => {
    jogos[id] = jogos
    return jogos[id]
}

const deleteJogo = (id) => {
    eleToRemove = jogos[id]
    jogos = jogos.filter(function(elemento) {
        return elemento.nome != eleToRemove.nome && elemento.lancamento != eleToRemove.lancamento;
    })
    return jogos
}

module.exports = {
    getJogos,
    getJogosById,
    createJogo,
    updateJogo,
    deleteJogo
}