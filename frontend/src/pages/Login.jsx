import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"
import { toast } from "react-toastify"

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await API.post("/auth/login",{
        email,
        password
      })

      localStorage.setItem("token",res.data.token)

      toast.success("Login successful.....")

      setTimeout(()=>{
        navigate("/dashboard")
      },1500)

    } catch(err){

      toast.error("Invalid email or password ")

    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>

        </form>

      </div>

    </div>

  )
}

export default Login