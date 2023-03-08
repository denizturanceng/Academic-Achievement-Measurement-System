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
import ReplyIcon from '@mui/icons-material/Reply';
import Form from 'react-bootstrap/Form';

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

function DeleteModal(props, pCode) {
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

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  
 useEffect(() => {
   axios
     .get("http://localhost:1337/admin/listSuggestions")
     .then((res) => {
       setData(res.data);
       console.log("Result:", data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, []);


 const [emailData, setEmailData] = useState({
  to: "",
  subject: "",
  text: "",
});

 async function sendEmail() {
  try {
    const response = await fetch('http://localhost:1337/admin/send-email', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });
    const data = await response.json();
    console.log(data);
    if(data.status != "error")
    {
      toast.success("Your Response Was Send Successfully");
    }
    else
    {
      toast.error("Your Response Was Not Send");
    }
    
  } catch (error) {
    console.error(error);
    toast.error("Your Response Was Not Send");
  }
}

function sendButton() {
  sendEmail();
  handleClose();
  setEmailData({...emailData, to: ""});
  setEmailData({...emailData, subject: ""});
  setEmailData({...emailData, text: ""});
}


return (
  <TableContainer component={Paper}>
    <Table aria-label="simple table" stickyHeader >
      <TableHead>
        <TableRow>
          <TableCell><b>E-MAIL</b></TableCell>
          <TableCell><b>SUGGESTION</b></TableCell>
          <TableCell><b>REPLY</b></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.customerEmail}</TableCell>
            <TableCell>{row.suggestion}</TableCell>
            
            <TableCell>
              <IconButton variant="primary" className='text-black' onClick={ () => {handleShow(); setEmailData({...emailData, to: row.customerEmail})}}>
                <ReplyIcon />
              </IconButton>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Reply To Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Subject:</Form.Label>
                      <Form.Control type="text" className='w-25' onChange={(e) => setEmailData({...emailData, subject: e.target.value})} />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Text:</Form.Label>
                      <Form.Control type="text" className='p-3' onChange={(e) => setEmailData({...emailData, text: e.target.value})} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => { sendButton() }}>
                    Send
                  </Button>
                </Modal.Footer>
              </Modal>
            </TableCell>
            {/* <TableCell>
            <IconButton variant="primary" type='submit' onClick={() => {setModalShow(true); setDeleteProductData(deleteProductData.productCode=row.productCode);}}>
                <DeleteIcon />
            </IconButton>
              <DeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />            
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}