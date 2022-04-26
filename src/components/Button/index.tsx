import React from "react";
import {Botao} from "./styles"
import { Props } from "./types";

const Button = ({onClick, children}:Props) => {
    return (
        <>
        <Botao  onClick={onClick}>          
          {children}
        </Botao>
        </>
    )
}
export default Button;