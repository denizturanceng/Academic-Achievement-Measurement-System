import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Login } from '../../../../client/admin-panel/src/axios/axios.js'
import { Form, Button, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import '../assets/styles/LoginPage.css';

const LoginPage = ({setAdmin}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username : "",
        password : "",
    })

    return (
        
        <Container className="mt-5">
            
            <Row className="justify-content-center mt-5">
            <div className='mt-5'></div>
            <div className='mt-5'></div>
            <div className='mt-5'></div>
                <form className="login-form form-group center-block w-50 mt-5" onSubmit={(e) => {
                     e.preventDefault();
                     Login(formData).then((res) => {
                        console.log(res)
                        navigate("/adminHome")
                        toast.success("Successfully Authentication.")
                    })
                     .catch((err) => {
                        toast.error(err.response.data.message);
                    })
                }}>
                    <h1 className="text-center text-danger">LOGIN</h1>
                    <Form.Group controlId="formBasicEmail" className="w-50 col-md-auto  m-auto ">
                        <Form.Label className='text-danger'>Username</Form.Label>
                        <Form.Control
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                            type="text"
                            placeholder="Enter username"
                        />
                    </Form.Group>
                    <div><br></br></div>
                    <Form.Group controlId="formBasicPassword" className="w-50 col-md-auto  m-auto" >
                        <Form.Label className='text-danger'>Password</Form.Label>
                        <Form.Control
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            type="password"
                            placeholder="Password"
                            
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button disabled={formData.username==="" || formData.password===""} variant="danger" type="submit" className="btn-block w-50">
                             Login
                        </Button>
                    </div>
                    <div>
                        <br></br>
                        {/* {error && <Alert variant="danger" className="text-center">{error}</Alert>}  */}
                    </div>
                    
                </form>
            </Row>
        </Container>
    );
}

export default LoginPage;
