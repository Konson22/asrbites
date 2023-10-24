import { Link } from "react-router-dom";
import Navbar, { BottomNavbar } from "../../components/Navbar";
import axiosInstance from "../../hooks/useAxios";
import { useState } from "react";
import { useGlobalApi } from "../../contexts/ContextProvider";


export default function LoginPage() {

  const { setProfile } = useGlobalApi()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [userData, setUserData] = useState({
    email:'',
    password:'',
  })


  const handleInput = ev => setUserData({...userData, [ev.name]:ev.value});

  async function handleSubmit(ev){
    ev.preventDefault()
    
    setIsLoading(true)
    try {
      const results = await axiosInstance.post('/auth/login', userData).then(res => res)
      setProfile(results.data)
    } catch (error) {
      if(error?.response){
        setMessage(error?.response?.data)
      }else{
        setMessage(error.message)
      }
    }finally{
      setIsLoading(false)
    }
  }
 
  return (
    <div>
      <Navbar />
      <div className="md:mx-[35%] bg-gray-100 mx-4 shadow-md p-5 rounded mt-6">
        {isLoading && 'Loading...'}
        <h4 className="text-4xl text-center">Login</h4>
        {message && <div className="p-2 text-red-500">{message.msg}</div>}
        <form onSubmit={handleSubmit} className="mt-10">
          {inputData.map(field => (
            <div className="mb-6">
              <input className="h-[3rem] w-full bg-white px-3" {...field} onChange={e => handleInput(e.target)} />
            </div>
          ))}
          <button className="w-full bg-red-900 text-white py-2 mt-4" type="submit">Login</button>
          <span className="block mt-3">Don't have account <Link className="text-blue-500" to='/signup'>Sign up</Link></span>
        </form>
      </div>
      <BottomNavbar />
    </div>
  )
}


const inputData = [
  {name:'email', type:'text', placeholder:'E-mail address'},
  {name:'password', type:'text', placeholder:'Password'},
]