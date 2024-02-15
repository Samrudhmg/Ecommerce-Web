import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "./cartItems";
import { Link } from "react-router-dom";

const cartItem=[
{
  productId:"abrakadabra",
  photo:"macbook.webp",
  name:"MacBook",
  price:60000,
  stock:45,
  quantity:6
}


]
const subtotal=4000;
const tax= Math.round(subtotal*0.18);
const shippingCharges=200;
const total=subtotal+tax+shippingCharges;
const discount=400;

const Cart = () => {
  const[couponCode,setcouponCode]=useState<string>("");
  const[isValidCouponCode,setisValidCouponCode]=useState<boolean>(false);

  useEffect(() => {
    const timeOutID= setTimeout(()=>{
      if(Math.random()>0.5) setisValidCouponCode(true)
      else setisValidCouponCode(false)
    },1000)
  
    return () => {
      clearTimeout(timeOutID)
    }
  }, [couponCode])
  
  return (
    <div className="cart">
   <main>
    {CartItems.length > 0 ?( cartItem.map((i,index)=> (<CartItems cartItem={i} key={index}/>))):(<h1>No items added</h1>)}
   </main>
   <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping charge: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>Discount: <em>- ${discount}</em></p>
        <p>
          <b>Total: ${total}</b>
        </p>
        <input type="text" value={couponCode} onChange={(e)=>setcouponCode(e.target.value)} placeholder="got any coupons" />
        {couponCode && ( isValidCouponCode? <span className="green"> ${discount} off using
         <code> {couponCode}</code></span> : 
         <span className="red"> Invalid Coupon <VscError/></span>)}


         {
          CartItems.length > 0 && <Link to="/shipping"> CheckOutLink</Link>
         }
   </aside>
  
    </div>
  )
}

export default Cart