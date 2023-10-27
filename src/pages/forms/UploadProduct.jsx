import { useState } from "react"
import Input from "./Input"
import axiosInstance from "../../hooks/useAxios"
import { FiImage } from "react-icons/fi"
import { useGlobalApi } from "../../contexts/ContextProvider"


export default function UploadProduct() {

  const { setCandy } = useGlobalApi()
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(ev){
    ev.preventDefault()
    
    setIsLoading(true)
    try {
      const formData = new FormData(ev.target)
      const results = await axiosInstance.post('/products/upload', formData).then(res => res)
      setCandy(prev => [...prev, results.data])
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
    <div className="md:w-[45%] md:mx-auto mx-3 my-6 md:bg-white shadow-sm md:p-8 p-3">
      {isLoading && <FormLoader />}
      {message && message}
      <div className="text-center mb-7">
        <h3 className="md:text-3xl text-2xl font-bold">حمل منتج</h3>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {inputData.map(field => <Input field={field} />)}
        <label htmlFor="upload-image">
          <div className="rounded flex items-center w-[max-content] cursor-pointer p-3 bg-gray-200 mb-4">
            <FiImage className="text-3xl mr-2" /> إرفاق صورة
          </div>
          <input type="file" name="image" id="upload-image" />
        </label>
        <button className="w-full bg-green-500 text-white py-2" type="submit">تحميل</button>
      </form>
    </div>
  )
}


function FormLoader(){
  return(
    <div className="h-screen fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md">
      <div className="bg-white text-center text-2xl px-16 py-8">
        <div className="h-[120px] w-[120px] rounded-full overflow-hidden animate-spin">
          <img src={process.env.PUBLIC_URL+'/images/loader.png'} alt="" />
        </div>
        ...جاري تحميل
      </div>
    </div>
  )
}


const inputData = [
  {name:'name', type:'text', placeholder:'إسم المنتج'},
  {name:'category', type:'text', placeholder:'الصنف'},
  {name:'price', type:'text', placeholder:'السعر'},
  {name:'qty', type:'text', placeholder:'الكمية'},
  {name:'description', type:'textarea', placeholder:'وصف المنتج...'},
]
