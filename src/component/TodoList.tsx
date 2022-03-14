import React, { useEffect, useState } from "react";
import InputSearch from "./Input/Input"
import styled from "styled-components";

interface labelProps {
    sublinhe: boolean | null;
}
const TodoList: React.FC = () => {
    const [explicacao, setExplicacao] = useState(false)
    const [atividade, setAtividade] = useState([])
    const [subilinhe, setSubilinhe]  = useState<string[]>([])
    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>, index: string) => {
        
        if(e.target.checked){
            setSubilinhe([...subilinhe, index])
        } else{
            subilinhe.splice(subilinhe.indexOf(index), 1)
            setSubilinhe([...subilinhe])
        }
            
    }
    useEffect(()=>{console.log(subilinhe)},[subilinhe])
    return (
        <>
            <InputSearch
                name="atividades"
                placeholder="Digite a sua Atividade"
                setAtividade={setAtividade}
                atividade={atividade}
                 />
            <AreaCheckbox>
                {atividade.map((item, index) => {
                    return (
                    
                        <Item>
                            <Input className="input" type="checkbox" id={index.toString()} key={index} onChange={(e) => handleChanged(e, index.toString())}></Input>
                            <Label htmlFor={index.toString()} sublinhe={subilinhe.includes(index.toString())? true : false} id={index.toString()} >{item}</Label>
                        </Item>
                        
                        
                    )
                }
                )}
                <Button
                    onClick={()=>{
                    setAtividade([])
                    setSubilinhe([])}} 
                    onMouseOver={()=>setExplicacao(!explicacao)} 
                    onMouseOut={()=>setExplicacao(!explicacao)}>-</Button>
                {explicacao && <Explica>Clique aqui para apagar todos os itens da lista</Explica>}
            </AreaCheckbox>
        </>
    )



}

export default TodoList;

const Input = styled.input`
transform: scale(1.5);
margin-right: 10px;
:before{
    content: ' ';
  width: inherit;
  height: inherit;
  position: absolute;
  background-color: #fff;
}
:checked:after{
    content: 'X';
font-size:16px;
  width: 0.8rem;
  height: 0.9rem;
  background-color: #f8f1f1;
  position: absolute;
  color: red;
  transform: translateY(0.1px);
  display:flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-radius: 10%;
    
}

`;

const AreaCheckbox = styled.div`
width: 76%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`;
const Item = styled.div`
display: flex;
flex-direction: row;
margin: 10px;
align-items: center;
background-color: #504b47;
border-radius: 30px;
width:100%;
padding:10px;
`;
const Label = styled.label<labelProps>`
font-size: 180%;
text-decoration:${(props) => props.sublinhe ? "line-through red" : " none"};

`;

const Button = styled.button`
border-radius: 50%;
background-color: white;
height: 50px;
font-size:25px;
width: 50px;
position: absolute;
top: 85%;
right:5%;
border: 1px solid gray;
:hover{
    background-color: rgb(231, 231, 231);
}
:active{
    background-color:rgb(85, 85, 85);
    transform:scale(0.9);
}
`;
const Explica = styled.div`
position: absolute;
display:flex;
background-color:#fff;
align-items:center;
width:200px;
height: 50px;
top:75%;
right:9%;
color:black;
border-radius: 9px;
text-align:center;

`;