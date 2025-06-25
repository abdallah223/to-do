import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { initialTodoList } from "../data.js";
import toast from "react-hot-toast";

export default function Todo() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const handleCheckedItem = (id) => {
    setTodoList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleDeleteItem = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
    toast.success(`Item deleted successfully.`);
  };
  return (
    <div className="todo">
      <div className="todo-container">
        <h1 className="todo-title">Todo App</h1>
        <TodoForm setTodoList={setTodoList} />
        <TodoList
          todoList={todoList}
          handleCheckedItem={handleCheckedItem}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
}
