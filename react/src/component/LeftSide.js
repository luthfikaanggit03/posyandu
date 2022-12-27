import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftSide = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Login Akun E-Posyandu Puspita Sari</h2>
            <hr></hr>
            <br></br>
            <Form style={{width:"80%", marginLeft:"10%"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan E-mail" />
                    <Form.Text className="text-muted">
                        Masukkan E-mail Sesuai Data
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => navigate('/dashboard')}>
                    LOGIN
                </Button>
                
            </Form>
        </div>

    )
}

export default LeftSide