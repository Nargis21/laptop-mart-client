import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secure-temple-20548.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `https://secure-temple-20548.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainig = products.filter(p => p._id !== id)
                    setProducts(remainig)
                })
        }
    }
    return (
        <div>
            <h1>Manage Inventories</h1>
            <div className="row">
                {
                    products.map(product => <div className=" col-sm-12 col-md-6 col-lg-4 g-5" key={product._id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">{product.name}</h3>
                                <h5>Supplier: {product.supplier}</h5>
                                <h5>Price: ${product.price}</h5>
                                <h5>Quantity: ${product.quantity}</h5>
                                <p className="card-text">{product.description}</p>

                                <button onClick={() => handleDelete(product._id)} className='btn btn-primary'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="w-50 mx-auto">
                <Link to='/add'><button className='btn btn-primary'>Add New Item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventory;