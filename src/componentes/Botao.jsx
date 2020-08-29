import React from "react";
import "./Botao.css";

export default (props) => (
    <button className={`Botao ${props["classe"]}`} onClick={(e) => props["click"] && props.click(props["legenda"])}>
        {props["legenda"]}
    </button>
);
