import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateLaporan()
{
    const {id} = useParams();

    console.log(id);


    
    
    return (
        <div>
            <HeaderLogin />
            <h1>update</h1>
            
        </div>
    )
}

export default UpdateLaporan