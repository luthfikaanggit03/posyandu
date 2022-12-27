import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Button, Row, Col} from 'react-bootstrap';
import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Login = () => {
    return (
        <div className="App">
            
            <Row className="landing">
                <Col><LeftSide /></Col>
                <Col><RightSide /></Col>
                
            </Row>
        </div>

    )
}

export default Login