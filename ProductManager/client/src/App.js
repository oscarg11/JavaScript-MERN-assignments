import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import OneProduct from './components/OneProduct';

function App() {

  useEffect(() => {
  axios.get("http://localhost:8000/api/products")
  .then(res => console.log(res.data) )
  .catch(err => console.log(err))
}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          < Route element={<ProductForm/>} path="api/products/create"/>
          < Route element={<ProductList/>} path="api/products"/>
          < Route element={<OneProduct/>} path="api/products/:id"/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
