/* eslint-disable react/prop-types */
import { useState } from "react";
import { Plus, X, ChevronDown, Flag, FlagOff } from "lucide-react";
import { priorityColors, initialTags } from "../data.js";
import toast from "react-hot-toast";

export default function TodoForm({ setTodoList }) {
  const [task, setTask] = useState("");
  const [formOptions, setFormOptions] = useState(false);
  const [priority, setPriority] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newTagMenu, setNewTagMenu] = useState(false);
  const [tags, setTags] = useState(initialTags);
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task === "") {
      toast.error("Please add a task.");
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
      priority: priority,
      tag: selectedTag,
    };
    setTodoList((prev) => [...prev, newTask]);
    setTask("");
    setPriority("");
    setSelectedTag("");
    setFormOptions(false);
    toast.success(
      `${
        task.charAt(0).toUpperCase() + task.slice(1)
      } task is added Successfully.`
    );
  };
  const handleCreateTag = () => {
    setTags((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: newTag.toLowerCase(),
        value: newTag,
      },
    ]);
    setSelectedTag(newTag);
    setNewTag("");
    setNewTagMenu(false);
  };

  return (
    <form onSubmit={handleAddTask}>
      <div className="form-header">
        <input
          value={task}
          type="text"
          placeholder="type your to-do"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="close-btn"
          type="button"
          onClick={() => {
            setFormOptions((cur) => !cur);
          }}
        >
          {formOptions ? (
            <X size={18} color="#3b82f6" />
          ) : (
            <ChevronDown size={18} color="#3b82f6" />
          )}
        </button>
        <button className="add-task" type="submit">
          <Plus size={18} />
        </button>
      </div>
      <div className={`form-footer ${formOptions ? "opened" : ""}`}>
        <div className="prirority task-options">
          <span className="title">Priroity:</span>
          <ul>
            <li>
              <input
                type="radio"
                id="no-priority"
                name="priority"
                value=""
                checked={priority === ""}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="no-priority">
                <FlagOff size={14} />
                No Priority
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="low"
                name="priority"
                value="low"
                checked={priority === "low"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="low">
                <Flag size={14} color={priorityColors.low} />
                Low
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="medium"
                name="priority"
                value="medium"
                checked={priority === "medium"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="medium">
                <Flag size={14} color={priorityColors.medium} />
                Medium
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="high"
                name="priority"
                value="high"
                checked={priority === "high"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label htmlFor="high">
                <Flag size={14} color={priorityColors.high} />
                High
              </label>
            </li>
          </ul>
        </div>
        <div className="tag task-options">
          <span className="title">Tag:</span>
          <div className="tag-list">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              {tags.map((tag) => (
                <option disabled={tag.disabled} key={tag.id} value={tag.value}>
                  {tag.name}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => setNewTagMenu((cur) => !cur)}>
              {newTagMenu ? <X size={16} /> : <Plus size={16} />}
            </button>
            <div className={`create-tag ${newTagMenu ? "opened" : ""}`}>
              <input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (newTag.trim() === "") {
                      toast("Please Add a tag first.");
                      return;
                    }
                    handleCreateTag();
                  }
                }}
                type="text"
                placeholder="Create a tag"
              />
              <button
                className=""
                type="button"
                onClick={() => {
                  if (newTag.trim() === "") {
                    toast("Please Add a tag first.");
                    return;
                  }
                  handleCreateTag();
                }}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
