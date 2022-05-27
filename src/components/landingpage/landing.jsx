import React from 'react'
import './landing.css';
import Frontend from '../frontend/Frontend'
import Header from '../header/header'
import Footer from '../footer/footer'
const landing = () => {
    return (
        <div className='container landing'>
            <Header></Header>
            <Frontend></Frontend>
            <Footer></Footer>
        </div>
    )
}

export default landing