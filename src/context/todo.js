import { createContext, useCallback, useState } from "react";
import axios from "axios";

const TodoContext = createContext();



const Provider = ({ children }) => {

    const [todos, setTodos] = useState([]);
    const fetchTodo = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/todo");
        setTodos(response.data);
    },[]);
    const deleteTodo = async(id) => {
        await axios.delete(`http://localhost:3001/todo/${id}`)
        setTodos(prevData => prevData.filter(item => item.id !== id && item))
    }
    const editTodo = async(id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/todo/${id}`,{ title : newTitle})
        setTodos(prevData => prevData.map(item => item.id === id ? {...item, ...response.data} : item))
    }
    const valueToShare = {
        todos,
        setTodos,
        fetchTodo,
        deleteTodo,
        editTodo
    }

    return (
        <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
    );
};
export { Provider };
export default TodoContext;
