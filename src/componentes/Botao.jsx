import React from "react";
import "./Botao.css";

export default (props) => {
    return (<button className={`Botao ${props["classe"]}`}>{props["legenda"]}</button>);
}
