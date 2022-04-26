import styled from "styled-components";

export const Container = styled.div `
    background-color:#12234f;
    color: #ffffffff;
    display:flex;
    margin: 0px;
    border-radius: 15px;
    justify-content: center;
    box-sizing: border-box;
    flex-direction:column;
    padding: 5px;
    align-items: flex-start;
    align-self: center;
    width: 400px;


`
export const Content = styled.div`
flex-direction: row;
display: flex;
margin-bottom: 30px;
`
export const DivBotaoInput = styled.div`
flex-direction: column;
justify-content:center;
align-items: center;
display:flex;
`

export const Imagem = styled.img`
    margin: 5px;
    height: 108px;
    width:  150px;
    border-radius: 8px;
`

export const Result = styled.p`
color:#a3bdff ;
font-size: larger;
`