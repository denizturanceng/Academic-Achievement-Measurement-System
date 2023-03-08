import React, { useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
import { Box, TextField, ComboBox } from "@mui/material";
import toast from 'react-hot-toast';


const UpdateProduct = () => {
    const navigate = useNavigate();
    const [productName, setProductName] = React.useState('');
    const [productPrice, setProductPrice] = React.useState('');
    const [productCode, setProductCode] = React.useState('');
    const [productType, setProductType] = React.useState('');
    const [productImage, setProductImage] = React.useState('');
    const [productContent, setProductContent] = React.useState('');
    const params = useParams();

    useEffect(()=>{
      GetProductDetails();
    },[])
    

    const GetProductDetails = async (id)=>{
      
      console.warn(params)
      let result = await fetch(`http://localhost:1337/admin/products/${params.id}`)
      result= await result.json()
      console.warn(result)
      setProductName(result.productName)
      setProductPrice(result.productPrice)
      setProductCode(result.productCode)
      setProductType(result.productType)
      setProductImage(result.productImage)
      setProductContent(result.productContent)
    }

    const UpdateProduct = async () => {
      console.warn(params.productName,params.productPrice,params.productCode,params.productType,params.productImage,params.productContent)
      let result = await fetch(`http://localhost:1337/admin/products/${params.id}`,{
         method:'Put',
         body:JSON.stringify({productName,productPrice,productCode,productType,productImage,productContent}),
         headers:{
          'Content-Type':'Application/json'
         }
      });
      result = await result.json()
    }

    return(
      <div className='product text-black text-center p-5 w-100  d-flex'>
        <Box className="w-50 m-auto p-4">
          <h1>Update Product</h1>
          <form  onSubmit={(e) => {
                e.preventDefault();
                UpdateProduct()
                  .then((res) => {
                    navigate("/listProducts");
                    toast.success("Product Updated Successfully.")
                  })
                  .catch((err) => console.log(err));
              }}
            >
          
          <Form.Control className='w-75 m-auto'  placeholder='New Product Name' value={productName} onChange={(e) => { setProductName(e.target.value) }}></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' placeholder='New Product Price'  value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }}></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' placeholder='New Product Code'  value={productCode} onChange={(e) => { setProductCode(e.target.value) }}></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' placeholder='New Product Type'  value={productType} onChange={(e) => { setProductType(e.target.value) }}></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' placeholder='New Product Image'  value={productImage} onChange={(e) => { setProductImage(e.target.value) }}></Form.Control><br></br><br></br>
          <Form.Control className='w-75 m-auto' placeholder='New Product Content'  value={productContent} onChange={(e) => { setProductContent(e.target.value) }}></Form.Control><br></br><br></br>
          <Button type='submit' variant='contained' id="addBtn">Update Product</Button>
          </form>
      </Box>
      </div>
    )

}
export default UpdateProduct;

 


