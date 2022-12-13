import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import NavBar from "../components/NavBar";
import "../styles/ProductsPage.css";
import "../styles/Product.css"
import { Container, Row, Col } from "react-bootstrap";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((Response) => Response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <h4 className="pageTitle">Products list:</h4>
        <Row>
          {products.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Product
                id={item._id}
                title={item.title}
                price={item.price}
                imgsrc1={item.imgsrc1}
                imgsrc2={item.imgsrc2}
                description={item.description}
                store={item.store}
              ></Product>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;
