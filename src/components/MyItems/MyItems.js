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
        const getOrders = async () => {
            const email = user.email
            const url = `https://secure-temple-20548.herokuapp.com/items?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setItems(data)
            }
            catch (error) {
                console.log(error)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders()
    }, [user])
    return (
        <div>
            <h1>My Items:{items.length}</h1>
            {
                items.map(item => <h2 key={item._id}>{item.name}</h2>
                )
            }
        </div>
    );
};

export default MyItems;