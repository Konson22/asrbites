import { useState } from "react"
import Input from "./Input"
import axiosInstance from "../../hooks/useAxios"
import Navbar from "../../components/Navbar"


export default function UploadProduct() {

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(ev){
    ev.preventDefault()
    
    setIsLoading(true)
    try {
      const formData = new FormData(ev.target)
      const results = await axiosInstance.post('/products/upload', formData).then(res => res)
      console.log(results.data)
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
      <div className="w-[45%] mx-auto my-6 bg-white shadow-sm p-14">
        {isLoading && 'LOading....'}
        {message && message}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {inputData.map(field => <Input field={field} />)}
          <input type="file" name="image" />
          <button className="w-full bg-green-500 text-white py-2" type="submit">Submir</button>
        </form>
      </div>
    </div>
  )
}


const inputData = [
  {name:'name', type:'text', placeholder:'Product name'},
  {name:'category', type:'text', placeholder:'Product Category'},
  {name:'price', type:'text', placeholder:'Price'},
  {name:'qty', type:'text', placeholder:'Product Qunatity'},
  {name:'description', type:'textarea', placeholder:'Desicription...'},
]