
import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import ProductForm from './components/ProductForm';

function App() {

  useEffect(() => {
  axios.get("http://localhost:8000/api/products")
  .then(res => console.log(res.data) )
  .catch(err => console.log(err))
}, [])

  return (
    <div className="App">
      <h1>Main app</h1>
        <ProductForm/>
    </div>
  );
}

export default App;
