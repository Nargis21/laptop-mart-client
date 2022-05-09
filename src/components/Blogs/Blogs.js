import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='p-5' id='blog'>
            <div className="question1">
                <h2> Difference between javascript and nodejs</h2>
                <h5>Javascript is a programming languange. Node.js is a runtime environment of javascript. Javascript only run in browser. Node.js help javascript to run outside of browser. Javascript basically used on client side. Node.js mostly used in servser side.Javascript written in c++. Node.js written in c, c++ and javascript</h5>
            </div>
            <div className="question2">
                <h2>When should you use nodejs and when should you use mongodb</h2>
                <h5>Node.js is suitable for realtime application.When we need to maintain a persistent connection from the browser back to the server.It's hepls to a user to write a application that sends updates to the user realtime.Mongobd is a document tyle no-sql database. When we need to store structured or unstructured data in database, mongodb is a best platform. It store the data in json format.
                </h5>
            </div>
            <div className="question3">
                <h2> Differences between sql and nosql databases.</h2>
                <h5>SQL database is table based structured database. It store data on table format. otherhand No-SQL database is document based. It store data on json or document format. No-sql database is better for unstructured data store.
                </h5>
            </div>
            <div className="question1">
                <h2> What is the purpose of jwt and how does it work</h2>
                <h5>JWT is a purpose of authorization. It secure the user data from unauthorized access. When user login token is generated and stored in local storage or cookie.When user want to access protected data it verify the user and check the token.If token verified it confirm the user access.</h5>
            </div>
        </div>
    );
};

export default Blogs;