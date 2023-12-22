import { TodoCounter } from '../components/TodoCounter';
import { TodoFill } from '../components/TodoFill';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    compTodo,
    delTodo
}){
    return (
        <>
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoFill 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
          <TodoList>
            {searchedTodos.map(todo =>(
               <TodoItem 
                  Key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete = {() => compTodo(todo.text)}
                  onDelete = {() => delTodo(todo.text)}
                />
            ))}
          </TodoList>
          <CreateTodoButton />
        </>
      );
}

export{ AppUI };