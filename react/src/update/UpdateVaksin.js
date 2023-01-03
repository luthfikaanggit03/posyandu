import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import { useParams } from "react-router-dom";

function UpdateVaksin() {

    const {id} = useParams();

    console.log(id);

    
    
    return (
        <div>
            <HeaderLogin />
            <h1>edit</h1>
        </div>
    )
}

export default UpdateVaksin