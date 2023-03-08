import React, { useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';


import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const rows = [];
 
export default function DynamicTable() {
 const [open, setOpen] = React.useState(false);
 
 const navigate = useNavigate();
 const [data, setData] = useState([]);

 const [deleteProductData, setDeleteProductData] = useState({
  productCode: "",
});



const DeleteProduct = async (pCode) => {
  axios.delete('http://localhost:1337/admin/deleteProduct', {data: { productCode: pCode }});  
}

function MyVerticallyCenteredModal(props, pCode) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-dark'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure?</h4>
        <p>
          You cannot undo this move.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="p-3">Cancel</Button>
        <form onSubmit={(e) => {
              e.preventDefault();
              console.log(deleteProductData);
              DeleteProduct(deleteProductData)
                .then((res) => {
                  window.location.reload(false);
                })
                .catch((err) => {
                  toast.error(err)
                });
                
            }}>      
        <Button type='submit' className="bg-danger ms-auto p-3">Delete</Button>
        
        </form>
      </Modal.Footer>
    </Modal>
  );
}

const [modalShow, setModalShow] = React.useState(false);
  
 useEffect(() => {
   axios
     .get("http://localhost:1337/admin/listProducts")
     .then((res) => {
       setData(res.data);
       console.log("Result:", data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, []);

return (
  <TableContainer component={Paper}>
    <Table aria-label="simple table" stickyHeader >
      <TableHead>
        <TableRow>
          <TableCell><b>Id</b></TableCell>
          <TableCell><b>Product Name</b></TableCell>
          <TableCell><b>Price</b></TableCell>
          <TableCell><b>Product Code</b></TableCell>
          <TableCell><b>Product Type</b></TableCell>
          <TableCell><b>Product Image</b></TableCell>
          <TableCell><b>Context</b></TableCell>
          <TableCell><b>Update Product</b></TableCell>
          <TableCell><b>Delete Product</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row._id}</TableCell>
            <TableCell>{row.productName}</TableCell>
            <TableCell>{row.productPrice}</TableCell>
            <TableCell>{row.productCode}</TableCell>
            <TableCell>{row.productType}</TableCell>
            <TableCell>
              <img src={require(`../assets/images/${row.productImage}`)} alt="Product Image" width="100" height="100" />
            </TableCell>
            
            <TableCell>{row.productContent}</TableCell>
            <TableCell>
              <IconButton variant="primary" className='text-black' onClick={() =>  navigate("/updateProduct/"+row._id)}>
                <EditIcon />
              </IconButton>
            </TableCell>
            <TableCell>
            <IconButton variant="primary" type='submit' onClick={() => {setModalShow(true); setDeleteProductData(deleteProductData.productCode=row.productCode);}}>
                <DeleteIcon />
              </IconButton>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />            
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}