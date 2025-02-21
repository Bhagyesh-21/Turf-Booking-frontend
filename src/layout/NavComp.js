import React from 'react'
import {Link} from 'react-router-dom';
import bootstrap from 'bootstrap';

const NavComp = () => {
    return (
        <div>
            {/* <h3>Navigation </h3> */}
            <Link to="home" className='btn btn btn-outline-primary btn-sm' >Home</Link> {" "}
            <Link to="about" className='btn btn btn-outline-primary btn-sm' >About</Link> {" "}
            <Link to="products" className='btn btn btn-outline-primary btn-sm' >Products</Link> {" "}
            <Link to="contact" className='btn btn btn-outline-primary btn-sm' >Contact</Link> {" "}
        </div>
    )
}

export default NavComp


 