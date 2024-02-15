import { FaPlus } from "react-icons/fa";



type ProductProps={
  productId:string;
  photo:string;
  name:string;
  price:number;
  stock:number;
  handler:()=>void;
}
const server ="sdfghjkcvbnm"

const ProductsCard = ({productId,price,name,photo,stock,handler}:ProductProps) => {

  return (
    <div className="productCard">
      <img src={photo} alt="nothing" />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button onClick={()=>handler}><FaPlus/></button>
      </div>
    </div>
  )
}

export default ProductsCard