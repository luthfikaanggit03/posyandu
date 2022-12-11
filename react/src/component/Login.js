import React from "react";
import '../style/Login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import Home from "./Home";
import Header from "./Header";

const Login = () => {
    const { http } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const submitForm = () => {
        //rest api call
        //console.log(email + ' ' + password);
        http.post('/login', { email: email, password: password }).then((res) => {
            console.log(res.data);
        })

    }

    return (
        <div>
            <Header />
            <div className="login">
                <div className="container">
                    <div className="input">
                        <form action="">
                            <h1>Login</h1>
                            <hr></hr>
                            <label>Email</label>
                            <input type="text" placeholder="example@gmail.com"
                                onChange={e => setEmail(e.target.value)}
                                id="email"></input>
                            <label>Password</label>
                            <input type="password" placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                                id="pwd"></input>
                            <button type="button" onClick={() => navigate('/dashboard')} >LOGIN</button>
                        </form>
                    </div>

                    <div className="right">
                        <img src='images/login-logo.png'></img>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login