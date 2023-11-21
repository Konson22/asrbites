import { useState, useContext, createContext, useEffect } from "react";
import axiosInstance from "../hooks/useAxios";

const contextApi = createContext();

export default function GlobalContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [candy, setCandy] = useState([]);
  const [bookingCodes, setBookingCodes] = useState([]);

  const savedCartItem = JSON.parse(localStorage.getItem("candy-cart"));
  const savedBookingCodesJson = JSON.parse(
    localStorage.getItem("booking-codes")
  );

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchResumies() {
      setIsLoading(true);
      try {
        const results = await axiosInstance("/products").then((res) => res);
        if (isMuted) {
          setCandy(results.data);
        }
      } catch (error) {
        if (
          error.status === 404 ||
          error.status === 403 ||
          error.status === 500
        ) {
          return setMessage(error?.response?.data);
        }
        setMessage("Error Occures!");
      } finally {
        setIsLoading(false);
      }
    }
    savedCartItem && setCartData(savedCartItem);
    savedBookingCodesJson && setBookingCodes(savedBookingCodesJson);
    fetchResumies();
    return () => {
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  ADD NEW ITEM INTGO CART
  const addItemToCart = (item) => {
    let respose = null;
    if (cartData.length > 0) {
      const result = cartData.find((i) => i.productID === item.productID);
      if (result) {
        respose = "Already Added to cart";
      } else {
        const newCart = [...cartData, item];
        setCartData(newCart);
        saveToLocalStorage(newCart);
      }
    } else {
      setCartData([item]);
      localStorage.setItem("candy-cart", JSON.stringify([item]));
    }
    return respose;
  };

  //  ADD NEW ITEM INTGO CART
  const addBookingCode = (cart) => {
    if (bookingCodes.length > 0) {
      const newCodes = [...bookingCodes, cart];
      console.log(newCodes);
      localStorage.setItem("booking-codes", JSON.stringify(newCodes));
    } else {
      console.log(cart);
      localStorage.setItem("booking-codes", JSON.stringify([cart]));
    }
  };

  // REMOVE ITEM FROM CART
  const removeItem = (id) => {
    const result = savedCartItem.filter((item) => item.productID !== id);
    setCartData(result);
    saveToLocalStorage("candy-cart", result);
  };

  // REMOVE ITEM FROM CART
  const removeReservation = (code) => {
    const result = savedBookingCodesJson.filter((item) => item.code !== code);
    setBookingCodes(result);
    saveToLocalStorage("booking-codes", result);
  };

  const clearSavedCartItem = () => {
    localStorage.removeItem("candy-cart");
    setCartData([]);
  };

  const sendMessage = () => {
    const encodedMessage = encodeURIComponent("Who Can we help you?");
    const confirmationMessage =
      "سيتم توجيهك إلى واتساب. يرجى مشاركة موقعك للتوصيل. هل ترغب في المتابعة؟";
    if (window.confirm(confirmationMessage)) {
      window.location.href =
        "https://wa.me/+249919913063?text=" + encodedMessage;
    }
  };

  const values = {
    cartData,
    isAdmin,
    candy,
    isLoading,
    message,
    bookingCodes,
    removeReservation,
    sendMessage,
    setBookingCodes,
    addBookingCode,
    setCandy,
    setCartData,
    setIsAdmin,
    removeItem,
    addItemToCart,
    clearSavedCartItem,
  };
  return <contextApi.Provider value={values}>{children}</contextApi.Provider>;
}

export const useGlobalApi = () => useContext(contextApi);

const saveToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

// const saveReservationToLocalStorage = (data) => {
//   localStorage.setItem("candy-cart", JSON.stringify(data));
// };
