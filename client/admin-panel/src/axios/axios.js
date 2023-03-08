import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'http://localhost:1337',
})

export const Login = async(formData) => 
    await HTTP.post('/admin/signin', formData);

export const AddProduct = async (formData) =>
    await HTTP.post("/admin/addProduct", formData);

    
