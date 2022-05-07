import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { _id, name, img, description, price, quantity, supplier } = product
    return (
        <div className=" col-sm-12 col-md-6 col-lg-4 g-5">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5>Supplier: {supplier}</h5>
                    <h5>Price: ${price}</h5>
                    <h5>Quantity: ${quantity}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/inventory/${_id}`}>
                        <button className='btn btn-primary'>Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;