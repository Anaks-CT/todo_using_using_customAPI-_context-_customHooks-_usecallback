import { useEffect} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import axios from 'axios'
import useTodoContext from "./hooks/use-todo-context";

function App() {
  
  const {setTodos, todos, fetchTodo} = useTodoContext()

  useEffect(() => {
    fetchTodo()
  },[fetchTodo])

  const newTodo = async(newTodo) => {
    const response = await axios.post('http://localhost:3001/todo' , {
      title : newTodo
    })
    setTodos([
      ...todos,
      response.data,
    ]);
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-5 pt-5">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <TodoInput newTodo={newTodo} />
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <TodoList />
      </div>
    </>
  );
}

export default App;
