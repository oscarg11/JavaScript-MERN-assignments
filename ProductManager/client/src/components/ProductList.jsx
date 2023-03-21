import React, {useState, useEffect} from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const ProductList = () => {
    //array of product objects
    const [product, setProduct] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
    	.then((res)=>{
	    console.log("NEW PRODUCT ADDED",res.data.products);
            setProduct(res.data.products);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    //navigate to the product creation form
    const navigateToProductForm = () => {
        navigate("/api/products/create")
    }

  return (
    // Product List table
    <div>
        <h1>All Products:</h1>
        <table className="table">
            <thead className='thead-dark'>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Details</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
            product.map((oneProduct) => {
                return (
                <tr key={ oneProduct._id }>
                    <td>{oneProduct.title}</td>
                    <td>${oneProduct.price}</td>
                    <td>{oneProduct.description}</td>
                    <td><Link to={`/api/products/${oneProduct._id}`}>
                        {oneProduct.title}
                    </Link></td>
                    <td>
                        <button className='btn btn-primary mx-1'>Update</button>
                        <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
        {/* //navigate to the product creation form */}
        <button className='btn btn-success' onClick={ navigateToProductForm }>Create New Product</button>
    </div>
  )
}

export default ProductList