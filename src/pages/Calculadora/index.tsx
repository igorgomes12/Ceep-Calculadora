/* eslint-disable no-eval */
import React from "react";
import { Container, Numeros,Tela,Cores,Cores1,Cores2 } from "./styles";
import { Link } from "react-router-dom";

const Calculadora:React.FC = () => {
  const [result, setResult] = React.useState("");

  const handleClick = (e:any) => {
    setResult(result.concat(e.target.name));
    
  };

  const clear = () =>{
    setResult('');
  }
  const backspace = () =>{
setResult(result.slice(0,- 1))

  }
  const calcula = () =>{
    try{
      
      setResult(eval(result).toString())
  }
    
    catch(err){
      setResult("Error")
    }
  }


  return (
    
      <Container>
        
          <Tela type="text" value={result} placeholder=" 0" />
        
      
        <Numeros>
        <Cores2 name="%"onClick={handleClick}> % </Cores2>
        <Cores2 name="CE"onClick={handleClick}> CE </Cores2>
        <Cores2 name="C"onClick={backspace} id="backspace"> C </Cores2>
        <Cores2 name="clear"onClick={clear} id="clear"> clear </Cores2>
        <Cores2 name="1/x"onClick={handleClick}> 1/x </Cores2>
        <Cores2 name="x²"onClick={handleClick}> x² </Cores2>
        <Link to="/">
        <Cores2 name="raiz"onClick={handleClick}> raiz </Cores2>
        </Link>
        <Cores2 name="/" onClick={handleClick}> / </Cores2>
        <Cores className="mudarCor" name="7"onClick={handleClick}> 7 </Cores>
        <Cores className="mudarCor" name="8"onClick={handleClick}> 8 </Cores>
        <Cores className="mudarCor" name="9"onClick={handleClick}> 9 </Cores>
        <Cores2 name="*"onClick={handleClick}> x </Cores2>
        <Cores className="mudarCor" name="4"onClick={handleClick}> 4 </Cores>
        <Cores className="mudarCor" name="5"onClick={handleClick}> 5 </Cores>
        <Cores className="mudarCor" name="6"onClick={handleClick}> 6 </Cores>
        <Cores2 name="-"onClick={handleClick}> - </Cores2>
        <Cores className="mudarCor" name="1"onClick={handleClick}> 1 </Cores>
        <Cores className="mudarCor" name="2"onClick={handleClick}> 2 </Cores>
        <Cores className="mudarCor" name="3"onClick={handleClick}> 3 </Cores>
        <Cores2  name="+"onClick={handleClick}> + </Cores2>
        <Cores className="mudarCor" name="+/-"onClick={handleClick}> +/- </Cores>
        <Cores className="mudarCor"name="0"onClick={handleClick}> 0 </Cores>
        <Cores className="mudarCor" name=","onClick={handleClick}> , </Cores>
        <Cores1 className="mudar" name="="onClick={calcula} id="result"> = </Cores1>
        </Numeros>

    </Container>
    
  );
};

export default Calculadora;



