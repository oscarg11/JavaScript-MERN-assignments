import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const EditProduct = (props) => {
    //use useParams to access an objects id from our route
    const {id} = useParams();
    //navigate allows us to reroute back to the dashboard when any query functions are invoked
    const navigate = useNavigate();

    //product object
    const [singleProduct, setSingleProduct] = useState({})

    //get one product object query
    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setSingleProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])

    //onChange
    const onChangeHandler = (e) => {
        setSingleProduct({...singleProduct,[e.target.name]: e.target.value})
    }

    //(Submit Handler) When the form is submitted this function is ran
    //edit product query function
    const updateProduct = (e) => {
        console.log("PRODUCT UPDATED VVV")
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, singleProduct)
            .then(res => navigate("/api/products"))
            .catch(err => console.log(err))
    }

     //go back to dashkboard
    const goBackToDashboard = () => {
        navigate("/api/products")
    }

  return (
    <div>
        <h1>Edit Product</h1>
        <form action="" className="form col-md-4 mx-auto" onSubmit={ updateProduct}>
                {/*  title  */}
                <div className="mb-3">
                    <label htmlFor='title' className="form-label">Title:</label>
                    <input type="text" name="title" className="form-control"  value={ singleProduct.title} onChange= { onChangeHandler }/>
                </div>
                {/* <!-- price --> */}
                <div className="mb-3">
                    <label  htmlFor='price' className="form-label">Price:</label>
                    <input type="number" name="price" className="form-control"  value={ singleProduct.price} onChange= { onChangeHandler }/>
                </div>
                {/* <!-- description --> */}
                <div className="mb-3">
                    <label  htmlFor='description' className="form-label">Description:</label>
                    <input type="text" name="description" className="form-control"  value={ singleProduct.description} onChange= { onChangeHandler }/>
                </div>
                {/* <!-- Submit button --> */}
                <input type="submit" value="Update"/>
            </form>

            {/* Navigate back to the dashboard */}
            <button className='btn btn-success mt-2' onClick={ goBackToDashboard }>Go Back</button>
    </div>
  )
}

export default EditProduct