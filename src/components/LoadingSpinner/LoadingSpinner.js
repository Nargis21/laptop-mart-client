import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div style={{ height: 400 }} className='d-flex align-items-center justify-content-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default LoadingSpinner;