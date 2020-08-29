import React, { Component } from "react";
import Botao from "../componentes/Botao";
import Display from "../componentes/Display";
import "./Calculadora.css";

export default class Calculadora extends Component {
    constructor(props) {
        super(props);

        this.limparMemoria = this.limparMemoria.bind(this);
        this.setOperacao = this.setOperacao.bind(this);
        this.addDigito = this.addDigito.bind(this);
    }

    limparMemoria() {
        console.log("Limpou!")
    }

    addDigito(valor) {
        console.log("Você adicionou!", valor);
    }

    setOperacao(valor) {
        console.log("Você operou!", valor);
    }

    render() {
        return (
            <div className="Calculadora">
                <Display valor="100" />
                <Botao classe="triplo" legenda="AC" click={this.limparMemoria} />
                <Botao classe="operacao" legenda="/" click={this.setOperacao} />
                <Botao legenda="7" click={this.addDigito} />
                <Botao legenda="8" click={this.addDigito} />
                <Botao legenda="9" click={this.addDigito} />
                <Botao classe="operacao" legenda="*" click={this.setOperacao} />
                <Botao legenda="4" click={this.addDigito} />
                <Botao legenda="5" click={this.addDigito} />
                <Botao legenda="6" click={this.addDigito} />
                <Botao classe="operacao" legenda="-" click={this.setOperacao} />
                <Botao legenda="1" click={this.addDigito} />
                <Botao legenda="2" click={this.addDigito} />
                <Botao legenda="3" click={this.addDigito} />
                <Botao classe="operacao" legenda="+" click={this.setOperacao} />
                <Botao classe="duplo" legenda="0"  click={this.addDigito} />
                <Botao legenda="." click={this.addDigito} />
                <Botao classe="operacao" legenda="=" click={this.setOperacao} />
            </div>
        );
    }
}
