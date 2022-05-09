import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://secure-temple-20548.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    const { name, img, price, quantity, supplier, description } = product
    // const [newUpdatedQuantity, setNewQuantity] = useState(0)
    const handleDecrease = () => {
        // setNewQuantity(parseInt(quantity) - 1)
        // console.log(newUpdatedQuantity)
        // const updatedQuantity = { newUpdatedQuantity }
        // console.log(updatedQuantity)
        const newUpdatedQuantity = parseInt(quantity) - 1
        console.log(newUpdatedQuantity)
        const updatedQuantity = { newUpdatedQuantity }
        console.log(updatedQuantity)
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



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const newQuantity = data.quantity
        console.log(newQuantity)
        const newUpdatedQuantity = parseInt(quantity) + parseInt(newQuantity)
        console.log(newUpdatedQuantity)
        const updatedQuantity = { newUpdatedQuantity }
        console.log(updatedQuantity)

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
            <h1 className='text-primary m-3'>Product Details</h1>
            <img height='200px' src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplier}</h5>
            <p>{description}</p>

            <div className="w-50 mx-auto">
                <button onClick={handleDecrease} className='btn btn-primary w-50'>Delivered</button>
            </div>

            <div className="w-50 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Quantity" type="number" {...register("quantity")} />
                    <input type="submit" value="Restock Product" />
                </form>
            </div>
            <div className='w-50 mx-auto'>
                <Link to="/manage"><button className='btn btn-secondary'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default InventoryDetail;