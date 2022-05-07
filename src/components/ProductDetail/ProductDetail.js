import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://secure-temple-20548.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    const { name, img, price, quantity, supplier, description } = product
    // const [newQuantity, setNewQuantity] = useState(0)
    // const updatedQuantity = { newQuantity }
    const handleDelivered = event => {
        event.preventDefault()
        const newQuantity = (event.target.quantity.value) - 1
        const updatedQuantity = { newQuantity }
        // setNewQuantity(quantity - 1)
        const url = `https://secure-temple-20548.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h1>This is inventry detail page</h1>
            <img height='150px' src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplier}</h5>
            <p>{description}</p>
            <button className='btn btn-primary w-50' onClick={handleDelivered}>Delivered</button>
            <form className='w-50' onSubmit={handleDelivered}>
                <input type="number" name="quantity" placeholder='Add Quantity' />
                <input type="submit" value="Add Quantity" />
            </form>
        </div>
    );
};

export default InventoryDetail;