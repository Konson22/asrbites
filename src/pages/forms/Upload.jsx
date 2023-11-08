import { useState } from "react"
import { FiCheck, FiImage } from "react-icons/fi"
import axiosInstance from "../../hooks/useAxios"


export default function Upload() {

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(90)


    const handleSubmit = async ev => {
        ev.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(ev.target)
            const result = await axiosInstance.post('/products/upload', formData, postOptions).then(res => res)
            console.log(result)
            // setChildren(prevItems => {
            //     return [...prevItems, result.data]
            // })
        } catch (error) {
            setMessage(error?.response?.data)
        }finally{
            setLoading(false)
        }
    }
    
    //AXIOS HEADER OPTIONS
    const postOptions = {
        widthCredentials:true, 
        withCredentials:'include',
        onUploadProgress:percentageLoaded => {
        const {total, loaded} = percentageLoaded
        const percent = Math.floor((loaded / total) * 100)
        percent <= 100 && setUploadPercentage(percent)
        }
    }
  return (
    <div className="flex items-center justify-center py-[4rem]">
        {loading && <Loader uploadPercentage={uploadPercentage} setUploadPercentage={setUploadPercentage} />}
        <div className="w-[40%]">
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <input 
                        className="h-[3rem] w-full border rounded border-lightred focus:border-none px-3"
                        name="name"
                        placeholder="Product name"
                    />
                </div>
                <div className="mb-5">
                    <input 
                        className="h-[3rem] w-full border rounded border-lightred focus:border-none px-3"
                        name="category"
                        placeholder="category"
                    />
                </div>
                <div className="mb-5">
                    <input 
                        className="h-[3rem] w-full border rounded border-lightred focus:border-none px-3"
                        name="qty"
                        placeholder="Qunatity"
                    />
                </div>
                <div className="mb-5">
                    <input 
                        className="h-[3rem] w-full border rounded border-lightred focus:border-none px-3"
                        name="price"
                        placeholder="Set price"
                    />
                </div>
                <div className="mb-5">
                    <textarea 
                        className="h-[6.3rem] w-full border rounded border-lightred focus:border-none p-3"
                        name="description"
                        placeholder="description"
                    ></textarea>
                </div>
                <div className="mb-5">
                    <label className="" htmlFor="image">
                        <div className="w-[max-content] cursor-pointer bg-lightred text-white flex items-center px-3 py-2 rounded">
                            <FiImage className="text-3xl" />
                            Upload Image
                        </div>
                        <input type="file" name="image" id="image" />
                    </label>
                </div>
                <button className="bg-lightred text-white w-full py-2 rounded">Upload</button>
            </form>
        </div>
    </div>
  )
}


const Loader = ({ uploadPercentage, setUploadPercentage }) => {
    return(
        <div className="h-screen fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="md:w-[35%] w-[90%] bg-white p-6 text-center rounded-md">
                    {uploadPercentage < 100 ?
                        <>
                            <span className="md:text-2xl">Uploading...</span>
                            <div className="md:h-[1.6rem] h-[1rem] bg-gray-50 rounded-[1rem] overflow-hidden shadow-inner md:my-6 my-4">
                                <div 
                                    className="h-full shadow-md rounded-[1rem] bg-gradient-to-l from-cl1 to-lightpink" 
                                    style={{width:`${uploadPercentage}%`}}>
                                </div>
                            </div>
                            <span className="md:text-3xl">{uploadPercentage}%</span>
                        </>:
                        <div className="flex flex-col items-center justify-center">
                            <span className="bg-green-200 shadow-md rounded-full md:text-5xl text-3xl p-3 my-4">
                                <FiCheck />
                            </span>
                            Successfully Uploaded!
                            <button className="bg-green-200 px-6 py-1 rounded mt-4" onClick={() => setUploadPercentage(0)}>Ok</button>
                        </div>
                    }
                </div>
        </div>
    )
}