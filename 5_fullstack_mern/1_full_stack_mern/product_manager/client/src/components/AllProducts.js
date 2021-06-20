import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from './Form';

const AllProducts = (props) => {
    const [ products, setProducts ] = useState([]);
    const [ errors, setErrors ] = useState({});
    const [ product, setProduct ] = useState({
        title: "",
        price: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/products", product)
            .then((res) => {
                console.log(res.data);
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [handleSubmit])



    return(
        <div>
            <Form 
                product={ product }
                setProduct={ setProduct }
                errors={ errors }
                handleSubmit={ handleSubmit }
            />
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    console.log("This is a new product")
                    return(
                        <div key={ index }>
                            <Link to={"/products" + product._id}>
                                { product.title }
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;