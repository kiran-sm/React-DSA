import React from "react";
import BackToProgram from "./commonComponents/BackToProgram";

const TodoListCode = () => {
  const code = `const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    let conditionalInput = e.target.value;
    setInputText(conditionalInput);
  };
  const addBtnHandler = () => {
    let trimInputText = inputText.trim();
    if (trimInputText.length > 0) {
      setTodos([trimInputText, ...todos]);
      setInputText("");
    } else {
      alert("Please enter a valid task.");
    }
  };

  const deleteHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <h1 className="mb-5">Todo List</h1>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="border rounded px-2 py-1"
            value={inputText}
            onChange={inputHandler}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            onClick={addBtnHandler}
          >
            Add
          </button>
        </div>
        <div>
          <h2>Added todo List</h2>
          <ul className="list-disc pl-5">
            {todos.map((todo, index) => (
              <div key={index} className="flex gap-5 mb-4">
                <li className="w-full shadow-amber-200">{todo}</li>
                <button
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-600 pointer-cursor"
                  onClick={() => deleteHandler(index)}
                >
                  <img src={delete_img} alt="delete" className="size-4" />
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default TodoList;`;
  return (
    <div className="bg-gray-100 p-8 rounded-md overflow-x-auto w-full">
      <pre>
        <code>{code}</code>
      </pre>
      <BackToProgram to="/todo-list" />
    </div>
  );
};

export default TodoListCode;
