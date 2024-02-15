import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type cartItemsProps={
    cartItem:any;
};
const CartItems = ({ cartItem }:cartItemsProps) => {
    const {photo, productId, name, price, quantity, stock}=cartItem;
  return (
    <div className="cart-item">
        <img src={photo} alt="abcd"></img>
        <article>
            <Link to={`/product/${productId}`}>{name}</Link>
            <span>${price}</span>
        </article>
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>
    <button><FaTrash/></button>
    </div>
  )
}

export default CartItems