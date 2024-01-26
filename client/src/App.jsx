import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskForm from "./pages/TaskForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/new" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}
