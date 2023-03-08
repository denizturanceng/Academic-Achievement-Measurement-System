import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const loginAPI = 'http://localhost:1337/admin/signin';
    const navigate = useNavigate();

    const submitLoginForm = (event) => {
        event.preventDefault();
        const formElement = document.querySelector('#loginForm');
        const formData = new FormData(formElement);
        const formDataJSON = Object.fromEntries(formData);
        const btnPointer = document.querySelector('#login-btn');
        btnPointer.innerHTML = 'Please wait..';
        btnPointer.setAttribute('disabled', true);

        axios.post(loginAPI, formDataJSON).then((response) => {
        btnPointer.innerHTML = 'Login';
        btnPointer.removeAttribute('disabled');
        const token = response.data;
        //const token = data.token;

        if (!token) {
            alert('Unable to login. Please try after some time.');
            return;
        }
        localStorage.clear();
        localStorage.setItem('user-token', token);
        setTimeout(() => {
            navigate('/');
        }, 500);
}).catch((error) => {
        btnPointer.innerHTML = 'Login';
        btnPointer.removeAttribute('disabled');
        alert("Oops! Some error occured.");
    });
    }
    return (
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5 text-center">İzmir Bakırçay Üniversitesi</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id="loginForm" onSubmit={submitLoginForm}>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-username'}>Username</FormLabel>
                                <input type={'text'} className="form-control" id={'login-username'} name="username" required />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Password</FormLabel>
                                <input type={'password'} className="form-control" id={'login-password'} name="password" required />
                            </FormGroup>
                            <Button type="submit" className="mt-2 loginBtn" id="login-btn">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
export default Login;