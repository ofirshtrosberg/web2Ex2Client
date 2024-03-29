import React, { useEffect, useMemo, useState } from "react";
import "../styles/ShoppingBagProduct.css";
import NavBar from "../components/NavBar";
import "../styles/ShoppingBagPage.css";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

export default function ShoppingBagPage() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/shoppingBag")
      .then((Response) => Response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setTotalPrice(0);
    products.map((product) =>
      setTotalPrice((totalPrice) => totalPrice + product.price * product.amount)
    );
  }, [products]);
  const handleDelete = (id) => {
    fetch("http://localhost:3000/shoppingBag/delete", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productToDelete: id,
      }),
    })
      .then((Response) => Response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  const columns = [
    { field: "_id", hidden: true },
    { field: "title", headerName: "Product", width: 150 },
    {
      field: "imgsrc1",
      headerName: "Photo",
      width: 400,
      renderCell: (params) => {
        return <img className="productImg" src={params.row.imgsrc1} alt="" />;
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 170,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 80,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  const rows = useMemo(
    () => products.map((row, index) => ({ ...row, id: row._id })),
    [products]
  );

  return (
    <>
      <NavBar></NavBar>
      <Box sx={{ height: 400, width: "100%" }}>
        <h4 className="pageTitle">Shopping Bag:</h4>
        <DataGrid
          rowHeight={170}
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[products.length]}
        />
      </Box>
      <br></br>
      <div className="total text-center">
        <p>Total price : {totalPrice} ₪</p>
      </div>
      <br></br>
    </>
  );
}
