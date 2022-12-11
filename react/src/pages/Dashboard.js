import React, { useState } from "react";
import Card from "../component/Card";
import CardData from "../component/CardData";
import '../style/Dashboard.css';
import HeaderLogin from "../component/Header-Login";

const Dashboard = () => {



    return (
        <div>
            <HeaderLogin />
            <div className="dashboard-card" >
                <Card details={CardData}/>
            </div>


        </div>
    )
}

export default Dashboard