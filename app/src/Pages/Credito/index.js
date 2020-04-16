import React, { Component } from 'react'
import api from '../../Services/api'

import Formulario from '../../Components/Credito/Formulario'

export default class Credito extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    geraRequest = async (data) => {
        let retorno = await (this.sendRequest(data))
        this.setState({ retorno })
    }

    sendRequest = async (body) => {
        let header = {
            "content-type": "application/json"
        }
        const response = await api.post("/analise", body, header)
        return response.data
    }

    setData = async (data) => {
        let state = this.state
        state.Entradas = data
        state.Frete = await this.loadData(data)
        this.setState(state)
    }

    render() {
        return (
            <>
                <Formulario
                    data={(data) => this.geraRequest(data)}
                />
                {this.state.retorno &&
                    <label
                    style={{display:'flex',justifyContent:'center',marginTop:'20px'}}
                    >
                        {`Limite de crédito disponível: R$:${this.state.retorno.Limite_Disponivel}`}
                    </label>
                }
            </>
        )
    }
}
