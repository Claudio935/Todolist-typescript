import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

export const Container = styled.div`
 
    background-color: rgb(24, 24, 32);
    color:white;
    min-height: 100vh;
    
    padding:0 5px 0 5px;

    
`
export const Area =  styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;


export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
   
}

`