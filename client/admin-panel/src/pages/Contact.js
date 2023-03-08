import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar.js'
import Sidebar from '../components/sidebar.js'
import Logo from '../components/adminMainContent.js'
import React, { useState } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import '../assets/styles/LoginPage.css';
import Topbar from "../components/topbar.js";
import ContactPage from "../components/contactPage.js";

function Contact() {
    return (
        <div className="d-flex">
        
            <Sidebar/>
            <ContactPage/>
        
        </div>
    );
}

export default Contact;