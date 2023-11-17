import { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../hooks/useAxios';

const contextApi = createContext()

export default function AdminContextProvider({ children }) {

  const [profile, setProfile] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [orders, setOrders] = useState([])
  const [pendingOrders, setPendingOrders] = useState([])


  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true
    async function fetchData(){
      setIsLoading(true)
      try{
        const results = await axiosInstance('/products/reservation').then(res => res)
        if(isMuted){
          setOrders(results.data)
        }
      }catch(error){
        setMessage('Message')
      }finally{
        setIsLoading(false)
      }
    }
    fetchData()
    verifyAuth()

    return () => {
      controller.abort()
      isMuted = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const getUniqueData = () => {
      if(orders.length > 0){
        const rawData = orders.map(item => item.code);
        const ids = [...new Set(rawData)]
        const dt = ids.map(id => {
          const res = orders.find(order => order.code === id)
          return {
            code:id, 
            served:res.served,
            collectionTime:res.collectionTime,
            collectionMethod:res.collectionMethod,
          }
        })
        setPendingOrders(dt)
      }
    }
    getUniqueData()
  }, [orders])

  const verifyAuth = async () => {
    try {
      const results = await axiosInstance.post('/auth').then(async res => res)
      setProfile(results.data)
    } catch (error) {
      if(error.response){
        console.log(error.response?.data)
      }else{
        console.log(error.message)
      }
    }finally{
      setIsLoading(false)
    }
  }


  const values = { 
    profile, 
    orders, 
    isLoading,
    message,
    pendingOrders, 
    openSidebar, 
    setOpenSidebar,
    setProfile,
  }
  return (
    <contextApi.Provider value={values}>
      {children}
    </contextApi.Provider>
  )
}

export const useAdminContaxtApi = () => useContext(contextApi)

