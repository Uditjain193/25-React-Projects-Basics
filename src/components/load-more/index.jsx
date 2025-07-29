import React, { useEffect, useState } from "react";
import "./styles.css";
const Loadmore = () => {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disablebutton, setdisablebutton] = useState(false);
  async function fetchproducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setproducts((prev) => [...prev, ...result.products]);
      }
      setloading(false);
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }
  useEffect(() => {
    fetchproducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) setdisablebutton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products &&
          products.length &&
          products.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
      </div>
      <div className="button-container">
        <button disabled={disablebutton} onClick={() => setcount(count + 1)}>
          Load More Products
        </button>
        {disablebutton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default Loadmore;
