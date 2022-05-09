import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

const HomeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secure-temple-20548.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='text-primary m-5'>
                <h1 className='mx-5 px-5'>Available Products</h1>
                <hr />
            </div>
            <div className='row'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
            <div className='w-50 mx-auto'>
                <Link to="/manage"><button className='btn btn-secondary'>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default HomeProducts;