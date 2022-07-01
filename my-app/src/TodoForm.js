import {useContext, useState} from 'react';
import { TodoListContext } from './TodoListContext';


export default function TodoForm() {

    const [value, setValue] = useState("");

    const [, setTodos] = useContext(TodoListContext);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        setTodos( prev => [
            ...prev, {id: new Date().toISOString(), content: value, completed: false},
        ]);
        setValue("");
    }}>
        <input type="text" placeholder='Todo Girin' value={value} onChange={ e => setValue(e.target.value) }/>
        <input type="submit" value="add" />
    </form>
  )
}
