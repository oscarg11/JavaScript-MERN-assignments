import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    //product object
    const [product, setProduct] = useState({
        title: '',
        price: '', 
        description: ''
    })

    //useNavigate
    const navigate = useNavigate()

    //go back to dashkboard
    const goBackToDashboard = () => {
        navigate("/api/products")
    }
    

     //(onChange)refreshes state with most recent changes
    const onChangeHandler = (e) => {
        setProduct({...product,[e.target.name]: e.target.value})
    }

    //validation
    const formValidation = () => {
        let isValid = true
        if (product.title.length < 2){
            return false
        }
        if (isNaN(product.price)){
            return false
        }
        if (product.description.length < 3){
            return false
        }
        return isValid
    }
    // once form is submitted a new product object is created in our db
    const submitProductHandler = (e) => {
        e.preventDefault()
        if (formValidation()){//check validation first
            console.log("NEW PRODUCT ADDED VVV")
             //makes a post request using axios to create a new product
            axios.post('http://localhost:8000/api/products/create', product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            navigate("/api/products")
        }
    }
  return (
    //create product formS
    <div>
        <h1>Product Manager Form</h1>
        <form action="" className="form col-md-4 mx-auto" onSubmit={ submitProductHandler }>
                {/*  title  */}
                <div className="mb-3">
                    {
                        //validation
                        product.title && product.title.length < 2 ? <p className='text-danger'>Title must be at least 2 characters long.</p> : null
                    }
                    <label htmlFor='title' className="form-label">Title:</label>
                    <input type="text" name="title" className="form-control" onChange={ onChangeHandler }/>
                </div>
                {/* <!-- price --> */}
                <div className="mb-3">
                    <label  htmlFor='price' className="form-label">Price:</label>
                    <input type="number" name="price" className="form-control" onChange={ onChangeHandler } />
                </div>
                {/* <!-- description --> */}
                <div className="mb-3">
                    {
                        //validation
                        product.description && product.description.length < 3 ? <p className='text-danger'>Description must be at least 3 characters long.</p> : null
                    }
                    <label  htmlFor='description' className="form-label">Description:</label>
                    <input type="text" name="description" className="form-control" onChange={ onChangeHandler } />
                </div>
                {/* <!-- Submit button --> */}
                <input type="submit" value="Submit"/>
            </form>
            {/* Navigate back to the dashboard */}
            <button className='btn btn-success mt-2' onClick={ goBackToDashboard }>Go Back</button>
    </div>
  )
}

export default ProductForm