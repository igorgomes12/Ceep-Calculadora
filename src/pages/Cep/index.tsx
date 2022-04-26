import React from "react";
import { Container, Imagem, Result, Content, DivBotaoInput } from "./styles";
import { serviceCep } from "../../service";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";



const Cep: React.FC = () => {
  const [cepValor, setCepValor] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [uf, setUf] = React.useState("");
  const [logradouro, setLogradouro] = React.useState("");
  const [ddd, setDdd] = React.useState("");

  const handleCep = async () => {
    const data = await serviceCep(cepValor);
    setBairro(data.bairro);
    setCep(data.cep.replace("-", ""));
    setUf(data.uf);
    setLogradouro(data.logradouro);
    setDdd(data.ddd);
  };

  return (
    
    <Container>
      <Content>
        <Imagem
          src="http://3.bp.blogspot.com/-RPV86Fx36ts/TuqnLICc-DI/AAAAAAAAAGM/aiDctQH82EQ/s1600/busca-cep-correios.jpg"
          alt="buscar"
        />
        <DivBotaoInput>
          <Input
            placeholder="Digite seu Cep"
            type="text"
            onChange={(e) => setCepValor(e.target.value)}
          />
          <Button onClick={handleCep}>Buscar</Button>
          
        </DivBotaoInput>
      </Content>

      <Result>CEP digitado: {cep}</Result>
      <Result> Bairro: {bairro}</Result>
      <Result> Estado: {uf}</Result>
      <Result>{logradouro}</Result>
      <Result> DDD: {ddd}</Result>
      <Link to="/calculadora">
        <Button >
          Calculadora
        </Button>
      </Link>
    </Container>
    
  );
};

export default Cep;
