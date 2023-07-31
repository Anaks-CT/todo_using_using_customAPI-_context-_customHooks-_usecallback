import SingleTodo from "./SingleTodo";
import useTodoContext from "../hooks/use-todo-context";

function TodoList() {

  const value = useTodoContext()
  const todoElem = value.todos.map((item, i) => {
    return (
      <SingleTodo
        key={item.id}
        todo={item}
        i={i}
      />
    );
  });

  return <>{todoElem}</>;
}

export default TodoList;
