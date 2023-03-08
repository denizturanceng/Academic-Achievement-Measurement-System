import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/login/Login';
import Auth from './auth/Auth';
import App from './App';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './portal/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home';
import AddProductPage from './pages/AddProductPage';
import ListProductsPage from './pages/listProductsPage';
import ContactPage from './pages/Contact';
import UpdateProductsPage from './pages/UpdateProductPage';
import {Toaster} from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
    <Routes>
        <Route path='/auth' element={<Auth />}>
            <Route path='login' element={<Login />} />
        </Route>
        <Route path="/" element={<App />}>
            <Route path='' element={
                <ProtectedRoute>
                    <HomePage />
                </ProtectedRoute>
            } />
        </Route>
        <Route path="/addProduct" element={<App />}>
            <Route path='' element={
                <ProtectedRoute>
                    <AddProductPage />
                </ProtectedRoute>
            } />
        </Route>
        <Route path="/listProducts" element={<App />}>
            <Route path='' element={
                <ProtectedRoute>
                    <ListProductsPage />
                </ProtectedRoute>
            } />
        </Route>
        <Route path="/contact" element={<App />}>
            <Route path='' element={
                <ProtectedRoute>
                    <ContactPage />
                </ProtectedRoute>
            } />
            
        </Route>
        <Route path="/updateProduct/:id" element={<App />}>
            <Route path='' element={
                <ProtectedRoute>
                    <UpdateProductsPage />
                </ProtectedRoute>
            } />
        </Route>
            
    </Routes>
    <Toaster 
    position='top-center'
    toastOptions={{
      duration: 2000,

    }}/>
</BrowserRouter>
  </React.StrictMode>
);
