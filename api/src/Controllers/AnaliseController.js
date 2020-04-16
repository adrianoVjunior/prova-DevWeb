const analisador = require('../Middleware/Analisador')
module.exports = {
    async post(request, response) {
        let resultadoAnalise =  await analisador.credito(request.body);

        return response.json({
            "Mensagem": "Sucesso",
            "Limite_Disponivel": resultadoAnalise
        })
    }
}