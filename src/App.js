import "./styles.css";
import Todo from "./components/Todo";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="App">
      <Todo />
      <Toaster />
    </div>
  );
}
