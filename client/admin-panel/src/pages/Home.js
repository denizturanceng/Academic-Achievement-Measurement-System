import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar.js'
import Sidebar from '../components/sidebar.js'
import Logo from '../components/adminMainContent.js'
import React, { useState } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import '../assets/styles/LoginPage.css';
import Topbar from "../components/topbar.js";
import HomeContent from "../components/adminMainContent.js";

function Home() {
    return (
        <div className="d-flex">
        
            <Sidebar/>
            <HomeContent/>
        
        </div>
    );
}

export default Home;