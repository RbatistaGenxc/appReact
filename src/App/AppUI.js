import { TodoCounter } from '../components/TodoCounter';
import { TodoFill } from '../components/TodoFill';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoLoading } from '../components/TodosLoading';
import { TodoCounterLoading } from '../components/TodosLoading/TodoCounterLoading';
import { TodoError } from '../components/TodoError';
import { TodoEmpty } from '../components/TodosEmpty';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
    loading,
    error,
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
         
         
         
          {!loading && <TodoCounter total={totalTodos} completed={completedTodos} />}
          {loading && <TodoCounterLoading />}
          <TodoFill 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
          <TodoList>
          {loading && 
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
          }
          
          {error && <TodoError />}
          
          {(!loading && !searchedTodos.length === 0) && <TodoEmpty />}

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