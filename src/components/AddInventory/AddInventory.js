import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './AddInventory.css'
const AddInventory = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'https://secure-temple-20548.herokuapp.com/product'
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='m-3 inventory-container'>
            <h2>Add new Product</h2>
            <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Email' value={user.email} type="email" {...register("email")} />
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Quantity' type="number" {...register("quantity")} />
                <input placeholder='Supplier'{...register("supplier")} />
                <input placeholder='Photo URL'{...register("img")} />
                <input placeholder='Description'{...register("description")} />
                <input type="submit" value='Add Product' />          </form>
        </div>
    );
};

export default AddInventory