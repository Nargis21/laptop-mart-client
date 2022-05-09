import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-black text-white mt-5'>
            <div className='footer-container'>
                <div className="footer-services">
                    <h4>Pages</h4>
                    <a href="/manage">Manage Item</a>
                    <a href="/add">Add Item</a>
                    <a href="/myItem">My Item</a>
                </div>
                <div className="company">
                    <h4>Company</h4>
                    <a href="/home">Home</a>
                    <a href="/blogs">Blogs</a>
                </div>
                <div className="contact">
                    <h4>Contact Us</h4>
                    <h5 className='text-secondary'>Phone: +15590845</h5>
                </div>
            </div>
            <div className='p-5 text-center'>
                <small >Copyright@2022.All Rights reserved.</small>

            </div>
        </div>
    );
};

export default Footer;