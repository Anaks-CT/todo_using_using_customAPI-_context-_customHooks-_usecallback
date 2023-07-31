import React, { useEffect, useRef, useState } from "react";
import useTodoContext from "../hooks/use-todo-context";

function SingleTodo({ todo, i,}) {


  const [editButtonClicked, seteditButtonClicked] = useState(false);
  const [tickmark, setTickmark] = useState(false)
  const [editInput, setEditInput] = useState(todo.title);
  const divEl = useRef()
  const value = useTodoContext()


  const handleDeleteClick = () => {
    value.deleteTodo(todo.id);
  };

  const handleClick = () => {
    setTickmark(!tickmark)
  };

  const handleEditClick = () => {
    seteditButtonClicked(!editButtonClicked);
  };

  const editedTodo = (e) => {
    setEditInput(e.target.value);
  };
  const saveEdit = () => {
    value.editTodo(todo.id, editInput);
    setEditInput(todo.title);
    seteditButtonClicked(!editButtonClicked);
  };
  const canceledit = () => {
    seteditButtonClicked(!editButtonClicked);
    setEditInput(todo.title)
  }
  const style = {
    tick: {
      textDecoration: tickmark && "line-through",
    },
  };

  useEffect(() => {
    const handleOuterClick = (e) => {
      if (!divEl.current.contains(e.target)){
        seteditButtonClicked(false);
        setEditInput(todo.title)
      }
    }
    document.addEventListener('click',handleOuterClick,true)
    return () => {
      document.removeEventListener('click',handleOuterClick)
    }
  },[])
  

  return (
    <div ref={divEl} className="col-5 my-1 p-3 shadow border rounded d-flex justify-content-between">
      <div className="d-flex">
        {i + 1}.<input type="checkbox" className="mx-1" onClick={handleClick} />
        {editButtonClicked ? (
          <input className="form-control" type="text" value={editInput} onChange={editedTodo} />
        ) : (
          <p className="m-0 mx-3" style={style.tick}>
            {todo.title}
          </p>
        )}
      </div>
      <div>
        {editButtonClicked ? (
            <>
                <button className="btn-sm btn-primary mx-1" onClick={canceledit}>Cancel</button>
                <button className="btn-sm btn-primary mx-1" onClick={saveEdit}>Save</button>
            </>
        ) : (
          <>
            <i className="mx-2 fa-solid fa-pen-to-square" onClick={handleEditClick}></i>
            <i className="fa-solid fa-trash" onClick={handleDeleteClick}></i>
          </>
        )}
      </div>
    </div>
  );
}

export default SingleTodo;
