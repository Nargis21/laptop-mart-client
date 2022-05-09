import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        const email = user.email
        const url = `https://secure-temple-20548.herokuapp.com/items?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            const url = `https://secure-temple-20548.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainig = items.filter(p => p._id !== id)
                    setItems(remainig)
                })
        }
    }
    // useEffect(() => {
    //     const getItems = async () => {
    //         const email = user.email
    //         const url = `https://secure-temple-20548.herokuapp.com/items?email=${email}`
    //         try {
    //             const { data } = await axios.get(url, {
    //                 headers: {
    //                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             })
    //             setItems(data)
    //         }
    //         catch (error) {
    //             console.log(error)
    //             if (error.response.status === 401 || error.response.status === 403) {
    //                 signOut(auth)
    //                 navigate('/login')
    //             }
    //         }
    //     }
    //     getItems()
    // }, [user])
    return (
        <div>
            <h1>My Items:{items.length}</h1>
            <div className="row">
                {
                    items.map(product => <div className=" col-sm-12 col-md-6 col-lg-4 g-5" key={product._id}>
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
        </div>
    );
};

export default MyItems;