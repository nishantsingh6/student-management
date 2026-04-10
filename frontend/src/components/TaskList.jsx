import { useEffect,useState } from "react"
import API from "../services/api"

function TaskList(){

  const [tasks,setTasks] = useState([])

  const fetchTasks = async()=>{

    const res = await API.get("/tasks")
    setTasks(res.data)

  }

  useEffect(()=>{
    fetchTasks()
  },[])

  const markCompleted = async(id)=>{

    await API.put("/"+id)

    fetchTasks()
  }

 const deleteTask = async(id)=>{

    await API.delete("/delete-task/"+id)

    fetchTasks()
  }

  return(

    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
       Total Tasks
      </h2>

      {tasks.map((task)=>(

        <div
        key={task._id}
        className="border-b py-3">

          <h3 className="font-semibold">
            {task.title}
          </h3>

          <p className="text-gray-600">
            {task.description}
          </p>

          <p className="text-sm text-gray-500">
            Student: {task.student?.name}
          </p>

          <div className="flex gap-2 mt-2">

            <span
            className={`px-2 py-1 text-xs rounded ${
              task.completed
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
            }`}>
              {task.completed ? "Completed" : "Pending"}
            </span>

            {!task.completed && (
              <button
              onClick={()=>markCompleted(task._id)}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                Complete
              </button>
            )}

            <button
            onClick={()=>deleteTask(task._id)}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm">
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  )
}

export default TaskList