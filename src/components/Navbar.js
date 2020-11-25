import { Search } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/en/6/64/Line_Mobile_Thailand_logo.jpeg" alt=""/>
            </Link>
            <div className="navbar_links">
                <div className="navbar_search">
                    <Search/>
                    <input type="text" placeholder="search phones"/>
                </div>
                <h2>Profile</h2>
                <Link to="/cart">
                <h2>Cart</h2>
                </Link>
                <Link to="/login">
                <h2>Login</h2>
                </Link>
               
                
            </div>
        </div>
    )
}

export default Navbar
