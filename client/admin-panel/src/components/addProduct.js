import React, { useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { AddProduct } from "../axios/axios.js";
import { DeleteProduct } from "../axios/axios.js";
import Header from "./Header";
import { Box, TextField, ComboBox } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'
import toast from 'react-hot-toast';

const AddRemove = () => {
  const navigate = useNavigate();
  const productID = JSON.stringify(localStorage.getItem('user'));
  console.warn(productID);
  const [addProductData, setAddProductData] = useState({
    productName: "",
    productPrice: "",
    productCode: "",
    productType: "",
    productImage: "",
    productContent: "",
  });
  const [deleteProductData, setDeleteProductData] = useState({
    productCode: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const res = await axios.post("http://localhost:1337/admin/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
      });
      setImage(res.data.imageUrl);
      setLoading(false);

      setAddProductData({...addProductData, productImage: res.data.imageUrl.slice(8,)})
      
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return <div className='text-center p-5 w-100  d-flex'>
    <Box className="w-50 m-auto p-4">
      <h1>Add Product</h1>
      
      <form  onSubmit={(e) => {
              console.log(addProductData.productImage);
              e.preventDefault();
              AddProduct(addProductData)
                .then((res) => {
                  navigate("/listProducts");
                  toast.success("Product Added Successfully")
                })
                .catch((err) => {
                  toast.error(err.response.data.message);
                });
                 
            }}
          >
          <Form.Control className='w-75 m-auto' onChange={(e) => setAddProductData({...addProductData, productName: e.target.value})} type='text' placeholder='Product Name'></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' onChange={(e) => setAddProductData({...addProductData, productPrice: e.target.value})} type='text' placeholder='Price'></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' onChange={(e) => setAddProductData({...addProductData, productCode: e.target.value})} type='text' placeholder='Code'></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' onChange={(e) => setAddProductData({...addProductData, productType: e.target.value})} type='text' placeholder='Type'></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' onChange={(handleChange)} type='file' placeholder='Image'></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' onChange={(e) => setAddProductData({...addProductData, productContent: e.target.value})} type='text' placeholder='Content'></Form.Control><br></br><br></br>
          <Button type='submit' variant='contained' id="addBtn">Create Product</Button>
          
      </form>
    </Box>
  </div>
}

export default AddRemove