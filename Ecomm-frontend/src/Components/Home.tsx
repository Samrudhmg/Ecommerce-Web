import { Link } from "react-router-dom";
import ProductsCard from "./product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">


      <section></section>

      <h1>
        Latest Products
        <Link to="/search">More</Link>
      </h1>
      <main>
 
        <ProductsCard
          productId="mayday"
          name="paviliion"
          price={4545}
          stock={400}
          handler={addToCartHandler}
          photo="https://ik.imagekit.io/3dqckpw4d/upload/13-inch_macbook_pro__Space_Grey1658216919m2-13inch-mac-book-pro-spacegrey.png"
        />
      </main>
    </div>
  );
};

export default Home;
