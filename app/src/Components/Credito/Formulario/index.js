import React, { Component } from 'react'

export default class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: null,
            cpf: null,
            dataNascimento: null,
            salarioBruto: null,
            qtdDependentes: null,
            empregado: null,
            tempoEmpregado: null,
            restricaoSerasa: null
        }
    }
    setProps = async (param) => {
        this.props.data(param)
    }

    setDataOnState = async (data, state) => {
        this.setState({ [state]: data })
    }

    dataValidation = async (param) => {
        if (
            param.nome === null ||
            param.cpf === null ||
            param.dataNascimento === null ||
            param.salarioBruto === null ||
            param.qtdDependentes === null ||
            (param.empregado === '' || param.empregado === null) ||
            param.tempoEmpregado === null ||
            (param.restricaoSerasa === '' || param.restricaoSerasa === null)

        ) {
            alert("Não foram informado todas as entradas")
            return
        }
        this.setProps(this.state)
    }

    render() {
        let style = {
            margin: '2px'
        }


        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <label>Preencha o Formulario</label>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                    <input
                        style={style}
                        placeholder='Nome'
                        type='text'
                        onKeyUp={(e) => this.setDataOnState(e.target.value, 'nome')}
                    />
                    <input
                        style={style}
                        placeholder='CPF'
                        type='text'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'cpf')}
                    />
                    <input
                        style={style}
                        placeholder='Data Nascimento'
                        type='date'
                        onKeyUp={(e) => this.setDataOnState(e.target.value + ' 00:00:00', 'dataNascimento')}
                    />
                    <input
                        style={style}
                        placeholder='Salário Bruto'
                        type='number'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'salarioBruto')}
                    />
                    <input
                        style={style}
                        placeholder='Qtd. Dependentes'
                        type='number'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'qtdDependentes')}
                    />
                    <label>Empregado?</label>
                    <select
                        id="empregado"
                        style={style}
                        onChange={(e) => this.setDataOnState((e.target.value === 'true' ? true : false), 'empregado')}
                    >
                        <option value=''>Selecione</option>
                        <option value='true'>Sim</option>
                        <option value='false'>Não</option>
                    </select>
                    <input
                        style={style}
                        placeholder='Tempo Empregado'
                        type='number'
                        onKeyUp={(e) => this.setDataOnState(parseFloat(e.target.value), 'tempoEmpregado')}
                    />
                    <label>Restricao Serasa?</label>
                    <select
                        style={style}
                        id="restricaoSerasa"
                        onChange={(e) => this.setDataOnState((e.target.value === 'true' ? true : false), 'restricaoSerasa')}
                    >
                        <option value=''>Selecione</option>
                        <option value='true'>Sim</option>
                        <option value='false'>Não</option>
                    </select>
                </div>
                <button
                    onClick={() => this.dataValidation(this.state)}
                >
                    Enviar
                </button>
            </div >
        );
    }
}