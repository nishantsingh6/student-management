import { useEffect,useState } from "react"
import API from "../services/api"

function StudentList(){

  const [students,setStudents] = useState([])
  const [editId,setEditId] = useState(null)
  const [name,setName] = useState("")
  const [standard,setStandard] = useState("")
  const [email,setEmail] = useState("")

  const fetchStudents = async()=>{

    const res = await API.get("/get-students")
    setStudents(res.data.students)

  }

  useEffect(()=>{
    fetchStudents()
  },[])

  const deleteStudent = async(id)=>{

    await API.delete("/delete-student/"+id)
    fetchStudents()

  }

  const startEdit = (student)=>{

    setEditId(student._id)
    setName(student.name)
    setStandard(student.standard)
    setEmail(student.email)

  }

  const updateStudent = async(id)=>{

    await API.put("/update-student/"+id,{
      name,
      standard,
      email
    })

    setEditId(null)

    fetchStudents()
  }

  return(

    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">
      Total  Students
      </h2>

      {students.map((s)=>(

        <div key={s._id} className="border-b py-2">

          {editId === s._id ? (

            <div className="flex gap-2">

              <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="border p-1 rounded"
              />

              <input
              value={standard}
              onChange={(e)=>setStandard(e.target.value)}
              className="border p-1 rounded"
              />

              <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="border p-1 rounded"
              />

              <button
              onClick={()=>updateStudent(s._id)}
              className="bg-green-500 text-white px-2 rounded">
                Save
              </button>

            </div>

          ) : (

            <div className="flex justify-between">

              <span>
                {s.name} | {s.standard} | {s.email}
              </span>

              <div className="flex gap-2">

                <button
                onClick={()=>startEdit(s)}
                className="bg-yellow-500 text-white px-2 rounded">
                  Edit
                </button>

                <button
                onClick={()=>deleteStudent(s._id)}
                className="bg-red-500 text-white px-2 rounded">
                  Delete
                </button>

              </div>

            </div>

          )}

        </div>

      ))}

    </div>
  )
}

export default StudentList