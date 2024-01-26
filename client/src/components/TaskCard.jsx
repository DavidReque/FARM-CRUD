import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/tasks/${task._id}`);
      }}
      className="bg-zinc-950 p-4 hover:cursor-pointer hover:bg-gray-950"
    >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
