import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTasks } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./components/loading";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [type, settype] = useState("Task");
  const [loading, setLoading] = useState(true);

  //--------------------------------------HandlerFunction------------------------------

  const fetchTasks = async () => {
    try {
      const tasks = await axios.get(API_URL);
      setTasks(tasks.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task.length == 0) {
        toast.error("You did not enter any task", {
          position: "top-right",
          autoClose: 1000,
          closeOnClick: true,
          theme: "dark",
          style: {
            width: "240px",
            fontSize: "14px",
            minHeight: "40px",
            height: "25px",
          },
        });
      } else {
        await axios.post(API_URL, { task, type });
        setTask("");
        settype("Task");
        fetchTasks();
        console.log("task saved in database successfully");
      }
    } catch (error) {
      console.error(error);
    }
    console.log("Task:", task, "type:", type);
  };
  const deltask = async (id) => {
    try {
      if (window.confirm("Do you want to delete this task?")) {
        await axios.delete(`${API_URL}/${id}`);
        fetchTasks();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const markDone = async (id, currentIdx) => {
    try {
      await axios.put(`${API_URL}/${id}`, { isDone: !currentIdx });
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const delALL = async () => {
    try {
      if (window.confirm("Are you sure you want to delete all tasks?")) {
        await axios.delete(API_URL);
        fetchTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {loading? <Loading/> : 
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 py-10 gap-5">
      j{/* Header */}
      <div className="lg:w-[70%] w-[85%] h-25 bg-gray-900/60 flex justify-between px-10 items-center rounded-xl">
        <div className="flex flex-col justify-start gap-0.5">
          <h1 className="text-4xl font-extrabold text-white">
            Todo <span className="text-blue-600">App</span>
          </h1>
          <h2 className="text-white/50 text-xs">
            Remind all your Important tasks
          </h2>
        </div>
        <div className="text-blue-600">
          <FaTasks size={28} />
        </div>
      </div>
      {/* Form */}
      <div className="lg:w-[70%] w-[85%] bg-gray-900/60 rounded-2xl px-10 min-h-22 flex items-center gap-3 lg:py-7 py-10  ">
        <form
          action=""
          onSubmit={handleFormSubmit}
          className="w-full flex lg:gap-0 gap-5 lg:flex-row flex-col  "
        >
          <input
            type="text"
            value={task}
            className="bg-blue-950/30 w-full lg:w-[80%] py-3 border border-blue-950 rounded focus:outline-0 px-5 text-white text-sm lg:rounded-l-2xl"
            placeholder="Enter what you want to remember..."
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <select
            name="Seclect"
            id=""
            className="bg-white w-full lg:w-[20%] px-2 py-3  lg:rounded-r-2xl not-lg:rounded-xl focus:outline-0"
            value={type}
            onChange={(e) => {
              settype(e.target.value);
            }}
          >
            <option value="" disabled>
              type
            </option>
            <option value="Task">Task</option>
            <option value="Productivity">Productivity</option>
            <option value="Health">Health</option>
            <option value="Study">Study</option>
            <option value="Coding">Coding</option>
            <option value="Personal">Personal</option>
          </select>
          <button
            className="bg-blue-600 px-7 py-3 font-semibold transition-all ease-in-out hover:scale-105 active:scale-95 rounded-xl lg:ml-5"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Seprator */}
      {tasks.length > 0 && (
        <div className="lg:w-[70%] w-[85%] flex justify-between px-5">
          <p className="text-blue-600">All tasks</p>
          <div className="flex gap-2 text-red-600 transition-all ease-in-out hover:scale-110 active:scale-95">
            <p>Clear All</p>
            <button className="text-red-600 text-medium" onClick={delALL}>
              <FiDelete />
            </button>
          </div>
        </div>
      )}
      {/* TaskList */}
      <ul className="flex flex-col gap-5 justify-center lg:w-[70%] w-[85%]">
        {/* Task */}
        {tasks.map((task, index) => (
          <div
            key={task._id}
            className="w-full bg-gray-900/60 min-h-20 rounded-xl flex justify-between items-center px-10 py-5 gap-1"
          >
            <div className=" w-full flex flex-col justify-between gap-2 bg-amber-00">
              <h1 className="text-white text-xs py-1 bg-green-950/70 w-15 text-center rounded-full">
                {task.type}
              </h1>
              <p
                className={`text-white text-justify font-mono text-[16px] tracking-tighter pr-5 ${task.isDone ? "line-through text-white/30" : "text-white"} `}
              >
                {task.task}
              </p>
              <p className="text-xs text-blue-600">25 May 2006</p>
            </div>
            <div className=" h-full flex justify-center items-center gap-3">
              <button className="text-red-600 transition-all ease-in-out hover:scale-125 active:scale-90">
                <MdDelete
                  onClick={() => {
                    deltask(task._id);
                  }}
                  size={20}
                />
              </button>
              <button
                className="text-blue-600 transition-all ease-in-out hover:scale-125 active:scale-90"
                onClick={() => {
                  markDone(task._id, task.isDone);
                }}
              >
                {task.isDone ? (
                  <FaCircleCheck size={15} />
                ) : (
                  <ImRadioUnchecked size={15} />
                )}
              </button>
            </div>
          </div>
        ))}
      </ul>
      <ToastContainer />
    </div>

    }
    </>
  );
};

export default App;
