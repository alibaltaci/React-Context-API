import {useContext} from 'react';
import { TodoListContext } from './TodoListContext';

export default function Navbar() {

    const [totalTodos] = useContext(TodoListContext);

  return (
    <nav>
        <h2>Todos {totalTodos.length}</h2>
    </nav>
  )
}
