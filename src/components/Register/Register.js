import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/googleLogo.png'


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (user || googleUser) {
        navigate('/home')
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleUserCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("Your two password didn't match")
        }
        if (password.length > 6) {
            setError('Password should be contain 6 characters')
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <h1 className='mt-3'>Sign Up</h1>
            <form onSubmit={handleUserCreateUser}>
                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' />
                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Password' />
                <input onBlur={handleConfirmPasswordBlur} type="password" name="ConfirmPassword" placeholder='Confirm Password' />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error || emailError?.message || googleError?.message}</p>
            {loading && <Spinner animation="border" variant="primary" />}

            <div className="googleLogin">
                <p>Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link></p>
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

export default Register;