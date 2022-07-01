import { useContext } from 'react'
import Filter from './Filter'
import { TodoListContext } from './TodoListContext'
    
    export default function TodoList() {

      const [todos, setTodos] = useContext(TodoListContext);

      return (
        <div>

          <Filter todos={todos} />

          <ul>
            {
              todos.map( todo => (
                <li key={todo.id}>{todo.content}</li>
              ))
            }
          </ul>


        </div>
      )
    }
    