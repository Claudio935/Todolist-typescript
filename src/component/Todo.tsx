import {Area, Container} from "../App.styled"
import { Title } from "./Title";
import TodoList from "./TodoList"
export const Todo = () =>
{
return(
    <Container>
        <Area>
            <Title>
                Lista de Tarefas
            </Title>
            <TodoList></TodoList>
        </Area>
    </Container>
)
    
   

};