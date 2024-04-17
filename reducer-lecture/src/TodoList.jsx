import React from "react";
import { useState, useRef, useReducer } from "react";

const TodoList = () => {

	const [inputValue, setInputValue] = useState("") 

  const reducer = (state, action) => {
    switch (action.type) {
	case "addTask":
		return [...state, {id: Date.now(), task: action.payload, isComplete: false}];

      case "reset":

      default:
        return state;
    }
  };
  let addtask = "";
  const [todos, dispatch] = useReducer(reducer, []);

  const renederList = () => {
	hellohelp
  }

  return (
    <div>
      <h2>Todo List ✏️</h2>
      <form >
        <label htmlFor="todo"></label>
        <input
          type="text"
          name="todo"
          placeholder="Add to list"
          onChange={(e)=> setInputValue(e.target.value)}
        />
        <button type = "button" onClick={() => dispatch({ type: "addTask" , payload: inputValue})}>ADD Todo</button>
		<li> {inputValue}
			<input type="checkbox"></input>
		</li>

		<button type = "button" onClick={() => dispatch({ type: "reset" })}>Remove list</button>
      </form>
	  

    </div>
  );
};

export default TodoList;
