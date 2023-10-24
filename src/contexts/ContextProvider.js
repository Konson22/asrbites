import { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../hooks/useAxios';

const contextApi = createContext()

export default function GlobalContextProvider({ children }) {

  const [cartData, setCartData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [candy, setCandy] = useState([])


  const savedCartItem = JSON.parse(localStorage.getItem('candy-cart'))

  useEffect(() => {

    if(savedCartItem){
      setCartData(savedCartItem)
    }else{
      console.log('you don\'t have items')
    }
    const controller = new AbortController();
    let isMuted = true
    async function fetchResumies(){
      setIsLoading(true)
      try{
        const results = await axiosInstance('/products').then(res => res)
        if(isMuted){
            setCandy(results.data)
        }
      }catch(error){
        if(error.status === 404 || error.status === 403 || error.status === 500){
          return setMessage(error?.response?.data)
        }
        setMessage('Error Occures!')
      }finally{
        setIsLoading(false)
      }
    }
    fetchResumies()
    verifyAuth()

    return () => {
      controller.abort()
      isMuted = false
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


const verifyAuth = async () => {
  try {
    const results = await axiosInstance.post('/auth').then(async res => res)
    if(results.status === 200){
      setProfile(results.data)
    }
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

  //  ADD NEW ITEM INTGO CART
  const addItemToCart = (item) => {
    if(cartData.length > 0){
      const result = cartData.find(i => i.productID === item.productID)
      if(result){
        alert(`${result.name} is Already Added to cart`)
      }else{
        const newCart = [...cartData, item]
        setCartData(newCart)
        saveToLocalStorage(newCart)
      }
    }else{
      setCartData([item])
      localStorage.setItem('candy-cart', JSON.stringify([item]));
    }
  }

  // REMOVE ITEM FROM CART
  const removeItem = id => {
    const result = savedCartItem.filter(item => item.productID !== id);
    setCartData(result)
    saveToLocalStorage(result)
  }

  const values = { 
    cartData, 
    profile, 
    candy, 
    isLoading,
    message,
    setCartData, 
    setProfile, 
    removeItem,
    addItemToCart 
}
  return (
    <contextApi.Provider value={values}>
      {children}
    </contextApi.Provider>
  )
}

export const useGlobalApi = () => useContext(contextApi)


const saveToLocalStorage = data => {
    localStorage.setItem('candy-cart', JSON.stringify(data));
}
