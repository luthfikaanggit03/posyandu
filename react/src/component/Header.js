import React from "react";
import '../style/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <img className="logo" src='images/logo.png'></img>
                <ul>
                    <li>
                        <Link className="nama" to="/">Posyandu Puspita Sari</Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            

        </div>
    )
}

export default Header 
