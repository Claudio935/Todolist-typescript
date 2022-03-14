import React, {InputHTMLAttributes, useEffect, useState} from "react";
import styled from "styled-components";
import imgInput from "../utils/assets/inputicons.png";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name : string;
    setAtividade: React.ComponentState
    atividade: React.ComponentState
    }
const InputSearch : React.FC <InputProps> = ({setAtividade, atividade, ...rest}) =>{
    function handleClick(){
        setAtividade([...atividade, palavra])
    }
    const [palavra, setPalavra] = useState(String)
    
    return(
                <FormInput>
                    <ButtonInput onClick= {handleClick} ><IMG src={imgInput}></IMG></ButtonInput>
                    <Input type= "text" {...rest}  onChange = {(e) => setPalavra(e.target.value)} ></Input>
                </FormInput>
                
          
            
       
            
        
        
    )
    
}


export default InputSearch

const IMG = styled.img`
width:70%;

`;
const Input = styled.input`
width: 100%;
background: #FFFF;
border: none;
font-size: 20px;
border-radius: 0 30px 30px 0;
:focus{
    outline: 0;
}
::placeholder {
    color: Black;
    padding-left: 15px;
    font-size: 20px;
}
`;
const ButtonInput = styled.button`
height:40px;
width: 5%;
border: none;
background-color: white;
border-radius: 30px 30px;
`;
const FormInput = styled.div`
background: #FFFF;
width:80%;
display:flex;
flex-direction: row;
border-radius:  30px;
margin:10px;
border : none;
`;