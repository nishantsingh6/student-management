import { useState, useEffect } from "react"
import API from "../services/api"

function TaskForm() {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [student,setStudent] = useState("")
  const [students,setStudents] = useState([])

  useEffect(()=>{

    const fetchStudents = async()=>{
      const res = await API.get("/get-students")
      setStudents(res.data.students)
    }

    fetchStudents()

  },[])

  const handleSubmit = async(e)=>{
    e.preventDefault()

    await API.post("/add-task",{
      title,
      description,
      student
    })

    setTitle("")
    setDescription("")
    setStudent("")

    window.location.reload()
  }

  return(

    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
        Assign Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        />

        <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        className="w-full border p-2 rounded"
        />

        <select
        value={student}
        onChange={(e)=>setStudent(e.target.value)}
        className="w-full border p-2 rounded">

          <option value="">Select Student</option>

          {students.map((s)=>(
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}

        </select>

        <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Assign Task
        </button>

      </form>

    </div>
  )
}

export default TaskForm