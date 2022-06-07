import React, { useState } from 'react';
import './Login.css'
import google from '../../images/googleLogo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true })
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email Sent!')
        }
        else {
            toast('Please enter your email!')
        }
    }
    return (
        <div className='form-container'>
            <h1 className='mt-3'>Login</h1>
            <form onSubmit={handleUserSignIn}>
                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' />
                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Password' />
                <input className='btn btn-primary' type="submit" value="Login" />
            </form>
            <p className='text-danger'>{error?.message || googleError?.message}</p>
            {loading && <Spinner animation="border" variant="primary" />}
            <div className="googleLogin">
                <p>New to Laptop-mart? <Link to='/register' className='text-decoration-none'>Create an account</Link></p>
                <p>Forget Password? <span className='reset-btn' onClick={resetPassword}>Reset Password</span></p>
                <div className='or-line'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button onClick={() => signInWithGoogle()}>
                    <img height='30px' src={google} alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;