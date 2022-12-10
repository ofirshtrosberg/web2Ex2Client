import React, { useEffect, useState } from "react";
import ShoppingBagProduct from "../components/ShoppingBagProduct";
const ShoppingBagPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/userProducts/shoppingBag")
      .then((Response) => Response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h4 className="pageTitle">Shopping Bag:</h4>
      {products.map((item) => (
        <ShoppingBagProduct
          id={item._id}
          title={item.title}
          price={item.price}
          imgsrc1={item.imgsrc1}
          imgsrc2={item.imgsrc2}
          description={item.description}
          store={item.store}
        ></ShoppingBagProduct>
      ))}
    </div>
  );
};

export default ShoppingBagPage;
