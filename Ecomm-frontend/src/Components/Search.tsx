import { useState } from "react"
import ProductsCard from "./product-card";


const Search = () => {
    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("");
    const [maxprice,setMaxPrice]=useState(100000);
    const [category,setcategory]=useState("");
    const [page,setpage]=useState(1);


    const addToCartHandler=()=>{

    }

    const isNextpage= page < 4;
    const isPrevpage= page > 1;

  return (
    <div className="product-search-page">
        <aside>

            <h2>Filters</h2>
            <div>
                <h4>Sort</h4>
                <select value={sort} onChange={(e)=>setSort(e.target.value)}>
                    <option value="range">None</option>
                    <option value="asc">price(Low-High)</option>
                    <option value="dsc">price(High-Low)</option>
                </select>
            </div>

            <div>
                <h4>Max-Price:{maxprice || ""}</h4>
                <input type="range" value={maxprice} min={100} max={100000}></input>
                   
            </div>

            <div>
                <h4>category</h4>
                <select value={category} onChange={(e)=>setcategory(e.target.value)}>
                    <option value="e">None</option>
                    <option value="asc">Sample 1</option>
                    <option value="dsc">Sample 2</option>
                </select>
            </div>
        </aside>
        <main>
            <h1>Products</h1>
            <input type="text" placeholder="search by name.." value={search} onChange={e=>setSearch(e.target.value)} />

            <div className="search-product-list">
                <ProductsCard 
                  productId="mayday"
                  name="paviliion"
                  price={4545}
                  stock={400}
                  handler={addToCartHandler}
                  photo="https://ik.imagekit.io/3dqckpw4d/upload/13-inch_macbook_pro__Space_Grey1658216919m2-13inch-mac-book-pro-spacegrey.png"
                  />
            </div>
            <article>
                <button disabled={!isPrevpage} onClick={()=>setpage(prev=>prev-1)}>Prev</button>
                <span>{page} of {4}</span>
                <button disabled={!isNextpage} onClick={()=>setpage(prev=>prev+1)}>Next</button>

            </article>
        </main>
    </div>
  )
}

export default Search