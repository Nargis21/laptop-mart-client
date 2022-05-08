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
            <h1>{products.length}</h1>
            <div className='row'>
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                    ></Products>)
                }
            </div>
            <div className='w-50 mx-auto'>
                <Link to="/manage"><button className='btn btn-primary'>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default HomeProducts;