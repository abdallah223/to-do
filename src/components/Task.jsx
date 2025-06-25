/* eslint-disable react/prop-types */
import { X, Tag, BadgeAlert } from "lucide-react";
import { useState } from "react";
import { priorityColors } from "../data.js";
import ConfirmModal from "./ConfirmModal";
import toast from "react-hot-toast";

export default function Task({ todo, onCheckedItem, onDeleteItem }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li
        key={todo.id}
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        <div className="todo-item-header">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              onCheckedItem(todo.id);
            }}
          />
          <span>{todo.text}</span>

          <button
            className="delete-button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <X color="#ef4444" size={16} />
          </button>
        </div>
        <div className="todo-item-footer">
          {todo.tag && (
            <div className="tag">
              <Tag size={14} style={{ transform: "scaleX(-1)" }} />
              <p>{todo.tag}</p>
            </div>
          )}
          {todo.priority && (
            <div
              className="priority"
              style={{
                color: `${priorityColors[todo.priority]}`,
              }}
            >
              <BadgeAlert size={14} />
              <p>{todo.priority}</p>
            </div>
          )}
        </div>
      </li>
      {showModal && (
        <ConfirmModal
          message={`Do you really want to delete "${todo.text}" item?`}
          onConfirm={() => {
            setShowModal(false);
            onDeleteItem(todo.id);
          }}
          onCancel={() => {
            setShowModal(false);
            toast("Deletion cancelled.", {
              icon: "ℹ️",
            });
          }}
        />
      )}
    </>
  );
}
