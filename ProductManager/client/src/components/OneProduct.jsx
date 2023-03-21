import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

const OneProduct = (props) => {
    //use useParams to access an objects id from our route
    const {id} = useParams();
    //product objects
    const [singleProduct, setSingleProduct] = useState({})

    //get one product query
    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/products/${id}`)
    	.then((res)=>{
	    console.log("DISPLAYING SINGLE PRODUCT===>",res.data);
            setSingleProduct(res.data.product);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);

    // display single product
  return (
    <div>
        <h1>One Product</h1>
        <h1>Product Name: {singleProduct.title}</h1>
        <p> Price: ${singleProduct.price}</p>
        <p>Description: {singleProduct.description}</p>

        {/* Edit */}
        <button className='btn btn-primary mx-1'>Edit</button>
    </div>
  )
}

export default OneProduct