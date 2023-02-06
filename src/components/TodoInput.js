import React, { useState } from "react";

function TodoInput({ newTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodo(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form className="d-flex justify-content center" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="btn-sm btn-primary"> add</button>
      </form>
    </>
  );
}

export default TodoInput;
