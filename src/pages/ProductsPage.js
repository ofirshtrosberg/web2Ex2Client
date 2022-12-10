import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((Response) => Response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h4 className="pageTitle">Products list:</h4>
      {products.map((item) => (
        <Product
          id={item._id}
          title={item.title}
          price={item.price}
          imgsrc1={item.imgsrc1}
          imgsrc2={item.imgsrc2}
          description={item.description}
          store={item.store}
        ></Product>
      ))}
    </div>
  );
};

export default ProductsPage;
