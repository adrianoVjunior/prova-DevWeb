module.exports = {
    async credito(dados) {
        let result = this.regras(dados)
        return result
    },

    async idade(dataNascimento) {
        dataNascimento = new Date(Date.parse(dataNascimento))
        let ano_aniversario = dataNascimento.getUTCFullYear()
        let mes_aniversario = dataNascimento.getUTCMonth() + 1
        let dia_aniversario = dataNascimento.getUTCDate()

        var d = new Date
        ano_atual = d.getUTCFullYear()
        mes_atual = d.getUTCMonth() + 1
        dia_atual = d.getUTCDate()

        quantos_anos = ano_atual - ano_aniversario;

        if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
            quantos_anos--;
        }

        return quantos_anos < 0 ? 0 : quantos_anos;
    },

    async regras(dados) {
        let { nome,
            cpf,
            dataNascimento,
            salarioBruto,
            qtdDependentes,
            empregado,
            tempoEmpregado,
            restricaoSerasa } = dados

        let idade = await this.idade(dataNascimento)

        let regra1 = idade < 18 ? true : false
        let regra2 = restricaoSerasa === true && empregado === false ? true : false
        let regra3 = restricaoSerasa === true && empregado === true && tempoEmpregado < 6 ? true : false
        let regra6 = restricaoSerasa === false && empregado === false ? true : false
        let regra4 = restricaoSerasa === true && empregado === true && tempoEmpregado >= 6 && tempoEmpregado <= 12 ? true : false
        let regra5 = restricaoSerasa === true && empregado === true && tempoEmpregado >= 12 ? true : false
        let regra7 = restricaoSerasa === false && empregado === true && tempoEmpregado < 6 ? true : false
        let regra8 = restricaoSerasa === false && empregado === true && tempoEmpregado >= 6 && tempoEmpregado <= 12 ? true : false
        let regra9 = restricaoSerasa === false && empregado === true && tempoEmpregado >= 12 ? true : false

        if (regra1 === true)
            return 0

        let resultRegra2 = regra2 === true ? 0 : 0
        let resultRegra3 = regra3 === true ? 0 : resultRegra2
        let resultRegra6 = regra6 === true ? 0 : resultRegra3
        let resultRegra4 = regra4 === true ? 10 : resultRegra6
        let resultRegra5 = regra5 === true ? 20 : resultRegra4
        let resultRegra7 = regra7 === true ? 10 : resultRegra5
        let resultRegra8 = regra8 === true ? 20 : resultRegra7
        let resultRegra9 = regra9 === true ? 30 : resultRegra8

        var LimiteDisponivel = (salarioBruto / 100) * resultRegra9

        return LimiteDisponivel
    }
}
