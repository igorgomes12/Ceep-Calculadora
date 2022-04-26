import React from "react";

export interface Props {
    onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
    children:React.ReactNode

}