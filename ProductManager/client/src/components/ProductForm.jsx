import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
    //product object
    const [product, setProduct] = useState({
        title: '',
        price: '', 
        description: ''
    })

     //refresh state with changes
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

    const submitProductHandler = (e) => {
        e.preventDefault()
        if (formValidation()){//check validation first
             //makes a post request using axios to create a new product
            axios.post('http://localhost:8000/api/products', product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
             // clears form after submit
            setProduct({title:"", price:"",description:""})
        }

    }
  return (
    //create product formS
    <div>
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
                        product.description && product.description.length < 2 ? <p className='text-danger'>Description must be at least 2 characters long.</p> : null
                    }
                    <label  htmlFor='description' className="form-label">Description:</label>
                    <input type="text" name="description" className="form-control" onChange={ onChangeHandler } />
                </div>
                {/* <!-- Submit button --> */}
                <input type="submit" value="Submit"/>
            </form>
    </div>
  )
}

export default ProductForm