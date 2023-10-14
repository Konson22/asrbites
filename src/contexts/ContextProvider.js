import { useState, useContext, createContext, useEffect } from 'react'

const contextApi = createContext()

export default function GlobalContextProvider({ children }) {

  const [cartData, setCartData] = useState([]);
  const [profile, setProfile] = useState(null)
  const [candy, setCandy] = useState([])


  const savedCartItem = JSON.parse(localStorage.getItem('candy-cart'))

  useEffect(() => {
    setProfile(null)
    setCandy(data)

    if(savedCartItem){
        setCartData(savedCartItem)
    }else{
        console.log('you don\'t have items ')
        
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

// console.log(cartData)

  const addItemToCart = (item) => {

    if(cartData.length > 0){
        const result = cartData.find(i => i.id === item.id)

        if(result){
            alert(`${result.name} is Already Added to cart`)
        }else{
            const newCart = [...cartData, item]
            setCartData(newCart)
            localStorage.setItem('candy-cart', JSON.stringify(newCart));
        }
    }else{
        localStorage.setItem('candy-cart', JSON.stringify([item]));
    }
  }


  const values = { 
    cartData, 
    profile, 
    candy, 
    setCartData, 
    setProfile, 
    addItemToCart 
}
  return (
    <contextApi.Provider value={values}>
      {children}
    </contextApi.Provider>
  )
}

export const useGlobalApi = () => useContext(contextApi)



// const saveToLocalStorage = data => {

// }
export const data = [
  {
      id:1,
      name:'Black Candy',
      image:process.env.PUBLIC_URL+ '/images/strawberry-8214486_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:2,
      name:'Blue Candy',
      image:process.env.PUBLIC_URL+ '/images/cake-pops-693645_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:3,
      name:'Black bary Candy',
      image:process.env.PUBLIC_URL+ '/images/cake-3669245_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:11,
      name:'Sweet Candy',
      image:process.env.PUBLIC_URL+ '/images/macarons-2548827_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:19,
      name:'Love Candy',
      image:process.env.PUBLIC_URL+ '/images/macaroons-2178371_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:187,
      name:'Amaiz Candy',
      image:process.env.PUBLIC_URL+ '/images/chocolate-183543_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:71,
      name:'Bary Candy',
      image:process.env.PUBLIC_URL+ '/images/strawberry-8214486_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:165,
      name:'Black Candy',
      image:process.env.PUBLIC_URL+ '/images/cake-pops-693645_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:198,
      name:'Sweet Candy',
      image:process.env.PUBLIC_URL+ '/images/cake-3669245_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:145,
      name:'Test Candy',
      image:process.env.PUBLIC_URL+ '/images/macarons-2548827_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:172,
      name:'XKD Candy',
      image:process.env.PUBLIC_URL+ '/images/macaroons-2178371_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
  {
      id:1123,
      name:'Happy birthday Candy',
      image:process.env.PUBLIC_URL+ '/images/chocolate-183543_1280.jpg',
      text:'This is some description for this candy products',
      price:200,
      rate:4.5,
  },
]