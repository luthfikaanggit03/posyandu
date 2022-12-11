import React from "react";
import '../style/Header.css';
import { Link } from "react-router-dom";

const HeaderLogin = () => {
    return (
        <div className="header">
            <div className="nav">
                <img className="logo" src='images/logo.png'></img>
                <ul>
                    <li>
                        <Link className="nama" to="/">Posyandu Puspita Sari</Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/">Logout</Link>
                    </li>
                </ul>
            </div>
            

        </div>
    )
}

export default HeaderLogin
