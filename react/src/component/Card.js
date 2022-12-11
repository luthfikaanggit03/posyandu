import React from "react";
import suntikan from "../assets/suntikan.png";
import imunisasi from "../assets/imunisasi.png";
import '../style/Dashboard.css';
import { useNavigate } from "react-router-dom";


const Card = (props) => {
    const navigate = useNavigate();

    return (
        <>
            
                {props.details.map((value, index) => (
                    <div className="card" key={index}>
                        <div className="image">
                            <img src={value.img}></img>
                        </div>
                        <div className="btn">
                            <button type="button" onClick={() => navigate(value.navigate)}>{value.title}</button>
                        </div>
                    </div>
                ))}

        </>

    )
}

export default Card