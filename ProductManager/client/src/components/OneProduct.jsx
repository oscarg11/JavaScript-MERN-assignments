import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const OneProduct = (props) => {
    //use useParams to access an objects id from our route
    const {id} = useParams();
    const navigate = useNavigate();
    //product objects
    const [singleProduct, setSingleProduct] = useState({})

    //get one product query
    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setSingleProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])

    //delete a product
    const deleteProduct = (e) => {
        console.log("DELETED PRODUCT FROM DETAILS PAGE ")
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => navigate("/api/products"))
            .catch(err => console.log(err))
            navigate("/api/products")
    }

    //edit a product
    const editProduct = (e) => {
        console.log("EDIT PAGE")
        navigate(`/api/products/edit/${id}`)
    }

    // display single product
  return (
    <div>
        <h1>One Product</h1>
        <h1>Product Name: {singleProduct.title}</h1>
        <p> Price: ${singleProduct.price}</p>
        <p>Description: {singleProduct.description}</p>

        {/* Edit buttton */}
        <button className='btn btn-primary mx-1'  onClick={ (e) => editProduct(singleProduct._id) } >Edit</button>
         {/* Delete button  */}
         <button className='btn btn-danger mx-1' onClick={ (e) => deleteProduct(singleProduct._id) }>Delete</button>
    </div>
  )
}

export default OneProduct