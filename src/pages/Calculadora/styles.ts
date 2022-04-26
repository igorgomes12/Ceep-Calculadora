// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";

export const Container = styled.div`
font-family:sans-serif;
font-size: 10px;
justify-content: center;
align-items: center;
top: 50%;
left: 50%;
position: absolute;
transform: translate(-50%, -50%);
margin: 0 auto;
width: 350px;
text-align: center;
border: 5px solid #101116;
background: #ffffff;
border-radius: 15px;

`
export const Numeros = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: minmax(60px, auto);

`
export const Tela = styled.input`
height: 105px;
width: 345px;
border:0px;
background-color: #171614;
text-align: right;
font-size: 25px;
font-weight: bold;
letter-spacing: 1px;
color: #ffffffff;

::placeholder {
    color: #ffffffff;
}

` 
export const Cores = styled.button`
background-color: #615e56;
color: #ffffffff;

`
export const Cores1 = styled.button`
background-color: #a6a195;
color:#383735;
`
export const Cores2 = styled.button`
background-color:#242322 ;
color: #ffffffff;
`