import "./Cart.css"
const CartContainer = ({handleIsActiveState , isActive}) => {
  console.log(isActive)
  return (
    <div>

      <h1>From Cart Container</h1>
      <section className="flex gap-10 mt-5 ">
        <h1 onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart? "active" : "btn" }`}>Cart</h1>
        <h1 onClick={()=>handleIsActiveState("about")} className={`${isActive.cart? "btn" : "active" }`}>About</h1>
      </section>


    </div>
  )
}

export default CartContainer
