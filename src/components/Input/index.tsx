import React from "react";
import {Input2} from "./styles"
import {Props} from "./types"

const Input = ({placeholder,type,onChange,...rest}:Props) => {
    return (
        <Input2 placeholder={placeholder}type={type} onChange={onChange} {...rest} />

    )
}
export default Input;