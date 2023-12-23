
import React from "react"
import { AppUI } from "./AppUI";
import {useLocalStorage} from './useLocalStorage'

// const dTodo=[
//   {text:"Instalar VsCode", completed:true},
//   {text:"Instalar Docker", completed:false},
//   {text:"Instalar Github", completed:false},
//   {text:"Aprender react", completed:false},
//   {text:"Aprender next", completed:false},
//   {text:"Instalar Node js", completed:true},
// ]

// localStorage.setItem('toDos_V1', JSON.stringify(dTodo));

// localStorage.removeItem('toDos_V1');


function App() {

  const {
    item: todos,
    saveItem: savTodos, 
    loading, 
    error,
  } =   useLocalStorage('toDos_V1', []);

  const [searchValue, setSearchValue] = 
  React.useState('');

  const completedTodos = todos.filter(todo => 
    !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const tTetx = todo.text.toLowerCase();
      const sTetx = searchValue.toLowerCase();
      return tTetx.includes(sTetx)
    }
    );

    const compTodo = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      savTodos(newTodos)
    };

    const delTodo = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      savTodos(newTodos);
    }; 

    return(
      <AppUI 
        loading ={ loading }
        error ={ error }
        completedTodos ={ completedTodos}
        totalTodos ={ totalTodos}
        searchValue ={ searchValue}
        setSearchValue ={ setSearchValue}
        searchedTodos ={ searchedTodos}
        compTodo ={ compTodo}
        delTodo ={delTodo}
      
      />
    );
 
}

export default App;
