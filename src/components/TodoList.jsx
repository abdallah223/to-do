/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TodoList({
  todoList,
  handleCheckedItem,
  handleDeleteItem,
}) {
  return (
    <ul className="todo-list">
      {todoList
        .slice()
        .sort((a, b) => a.completed - b.completed)
        .map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            onCheckedItem={handleCheckedItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
    </ul>
  );
}
