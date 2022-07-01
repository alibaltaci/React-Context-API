import React from 'react';
import TodoList from './TodoList';
import Navbar from './Navbar';
import { TodoListProvider } from './TodoListContext';
import TodoForm from './TodoForm';

export default function App() {
  return (
    <TodoListProvider>
      <div>
        <TodoForm />
        <Navbar />
        <TodoList />
      </div>
    </TodoListProvider>
  );
}

