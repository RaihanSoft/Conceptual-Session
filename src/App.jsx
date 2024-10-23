import Navbar from "./components/Navbar/Navbar"
import AllProducts from "./components/AllProducts/AllProducts"
import CartContainer from "./components/CartContainer/CartContainer"
import { useState } from "react"

const App = () => {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })


  const handleIsActiveState = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart"

      })

    }
    else {
      setIsActive({
        cart: false,
        status: "about"  

      })

    }

  }

  return (
    <>
      <Navbar />

      <section className="flex justify-around mt-10">
        <AllProducts />
        <CartContainer isActive={isActive}  handleIsActiveState={handleIsActiveState} />
      </section>

    </>
  )
}

export default App
