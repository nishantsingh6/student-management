import StudentForm from "../components/StudentForm"
import StudentList from "../components/StudentList"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import { useNavigate } from "react-router-dom"

function Dashboard(){

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("token")

    navigate("/")

  }

  return(

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          School Management Dashboard
        </h1>

        <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Logout
        </button>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="space-y-6">
          <StudentForm/>
          <StudentList/>
        </div>

        <div className="space-y-6">
          <TaskForm/>
          <TaskList/>
        </div>

      </div>

    </div>
  )
}

export default Dashboard