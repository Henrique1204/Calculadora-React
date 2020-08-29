import React from "react";
import "./Botao.css";

export default (props) => (<button className={`Botao ${props["classe"]}`}>{props["legenda"]}</button>);
