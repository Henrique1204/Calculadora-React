import React, { Component } from "react";
import Botao from "../componentes/Botao";
import Display from "../componentes/Display";
import "./Calculadora.css";

const valoresIniciais = {
    valorDisplay: "0",
    limparDisplay: false,
    operacao: null,
    valores: [0, 0],
    indiceAtual: 0
};

export default class Calculadora extends Component {
    constructor(props) {
        super(props);

        this.state = {...valoresIniciais};
        this.limparMemoria = this.limparMemoria.bind(this);
        this.setOperacao = this.setOperacao.bind(this);
        this.addDigito = this.addDigito.bind(this);
    }

    limparMemoria() {
        this.setState({ ...valoresIniciais });
    }

    addDigito(valor) {
        if (valor === "." && this.state["valorDisplay"].includes(".")) {
            return
        }

        const limparDisplay = (this.state["valorDisplay"] === "0" && valor !== ".") || this.state["limparDisplay"];
        const valorAtual = limparDisplay ? "" : this.state["valorDisplay"];
        const valorDisplay = valorAtual + valor;
        this.setState({ valorDisplay, limparDisplay: false });

        if (valor !== ".") {
            const i = this.state["indiceAtual"];
            const novoValor = parseFloat(valorDisplay);
            const valores = [...this.state["valores"]];
            valores[i] = novoValor;
            this.setState({ valores });
        }
    }

    setOperacao(operacao) {
        if (this.state["indiceAtual"] === 0) {
            this.setState({ operacao, indiceAtual: 1, limparDisplay: true });
        } else {
            const finalizar = operacao === "=";
            const operacaoAtual = this.state["operacao"];
            const valores = [...this.state["valores"]];

            switch(operacaoAtual) {
                case "/":
                    valores[0] = valores.reduce((acc, atual) => (acc / atual));
                    break;
                case "*":
                    valores[0] = valores.reduce((acc, atual) => (acc * atual));
                    break;
                case "-":
                    valores[0] = valores.reduce((acc, atual) => (acc - atual));
                    break;
                case "+":
                    valores[0] = valores.reduce((acc, atual) => (acc + atual));
                    break;
                default: break;
            }

            valores[1] = 0;
            this.setState({
                valorDisplay: valores[0],
                operation: (finalizar) ? null : operacao,
                indiceAtual: (finalizar) ? 0 : 1,
                limparDisplay: finalizar,
                valores 
            });
        }
    }

    render() {
        return (
            <div className="Calculadora">
                <Display valor={this.state["valorDisplay"]} />
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
