import { useState } from "react"
import API from "../services/api"
import { toast } from "react-toastify"

function StudentForm() {

  const [name, setName] = useState("")
  const [standard, setStandard] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await API.post("/create-student", {
        name,
        standard,
        email
      })

      toast.success("Student Added Successfully ")

      //  reload page
      setTimeout(() => {
        window.location.reload()
      }, 1000);


    } catch (error) {
      toast.error("Failed to add student")
      console.error(error)
    }
  }

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-xl font-bold mb-3">
        Add Student
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Class"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Student
        </button>

      </form>
    </div>
  )
}

export default StudentForm