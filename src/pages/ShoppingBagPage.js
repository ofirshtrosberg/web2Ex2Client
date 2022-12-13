
import React, { useEffect, useMemo, useState } from "react";
import "../styles/ShoppingBagProduct.css"
import NavBar from "../components/NavBar";
import "../styles/ShoppingBagPage.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { DataGrid} from '@mui/x-data-grid';
import axios from "axios";
import { DeleteOutline } from "@mui/icons-material";


const tabledata = "http://localhost:3000/userProducts/shoppingBag";
export default function ShoppingBagPage() {
  const [products, setProducts] = useState([]);

useEffect(() => {
    fetch(tabledata)
      .then((Response) => Response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []); 
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/userProducts/shoppingBag/delete/${id}`);
    setProducts(products.filter((item) => item._id !== id));
  };

  const columns =[
    {field: "title",headerName: "Product",width: 150,},

    {field:"imgsrc1", headerName: "Photo",width: 400,renderCell: (params) => {
      return (
          <img className="productImg" src={params.row.imgsrc1} alt="" />
      );
    },},
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
    field: "action",
    headerName: "Action",
    width: 80,
    renderCell: (params) => {
      return (
        <>
        <DeleteOutline
              className="productDelete"
              onClick={() => handleDelete(params.row.id)}
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
    <Box sx={{height: 400,width: '100%',}}>
      <Typography variant="h3" component="h3"sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        Shopping Bag:
      </Typography>
      <DataGrid 
        rowHeight={170}
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[products.length]}
      />
    </Box>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    </>
  );
};




