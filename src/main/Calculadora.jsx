import React, { Component } from "react";
import Botao from "../componentes/Botao";
import Display from "../componentes/Display";
import "./Calculadora.css";

export default class Calculadora extends Component {

    render() {
        return (
            <div className="Calculadora">
                <Display valor="100" />
                <Botao legenda="AC" classe="AC" />
                <Botao legenda="/" />
                <Botao legenda="7" />
                <Botao legenda="8" />
                <Botao legenda="9" />
                <Botao legenda="*" />
                <Botao legenda="4" />
                <Botao legenda="5" />
                <Botao legenda="6" />
                <Botao legenda="-" />
                <Botao legenda="1" />
                <Botao legenda="2" />
                <Botao legenda="3" />
                <Botao legenda="+" />
                <Botao legenda="0" classe="B0" />
                <Botao legenda="." />
                <Botao legenda="=" />
            </div>
        );
    }
}
