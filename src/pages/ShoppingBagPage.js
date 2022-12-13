import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/ShoppingBagPage.css";
//import * as Mui from '@material-ui/core';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { DataGrid, gridClasses } from '@mui/x-data-grid';
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
    axios.delete(`http://localhost:8080/api/products/admin/delete/${id}`);
    setProducts(products.filter((item) => item._id !== id));
  };

 /* const handleAddProduct = (product) => {
    const ProductExist = products.find((item) =>item.id === product.id);
    if(ProductExist) {
      setProducts(products.map((item) => item.id === product.id?
      {...ProductExist, quantity:ProductExist.quantity +1}:items)
    
    );
  } else {
    setProducts([...products, {...product, quantity:1}]);
  }

  }; 
*/
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
    {field: "amount",
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
    </>
  );
};




