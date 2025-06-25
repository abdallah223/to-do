export const priorityColors = {
  low: "#15803d", // dark green
  medium: "#ca8a04", // dark yellow
  high: "#b91c1c", // dark red
};

export const initialTodoList = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
    priority: "high",
    tag: "programming",
  },
  { id: 2, text: "Learn Redux", completed: false, priority: "medium", tag: "" },
  {
    id: 3,
    text: "Learn JavaScript",
    completed: true,
    priority: "",
    tag: "",
  },
  { id: 4, text: "Learn CSS", completed: false, priority: "", tag: "" },
  { id: 5, text: "Learn HTML", completed: true, priority: "", tag: "" },
];

export const initialTags = [
  { id: 0, value: "", name: "Select a Tag", disabled: true },
  { id: 1, value: "work", name: "work" },
  { id: 2, value: "home", name: "home" },
  { id: 3, value: "school", name: "school" },
  { id: 4, value: "programming", name: "programming" },
];
