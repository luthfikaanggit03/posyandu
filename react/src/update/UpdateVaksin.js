import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateVaksin = () => {
    const { id } = useParams();
    const [nama, setNama] = useState('');
    const navigate = useNavigate();
    const [formVaksin, setFormVaksin] = useState({nama:''})

    useEffect(() => {
        const dataVaksin = async() => {
            try{
                const respone = await axios.get(`http://localhost:8000/api/getvaksin/${id}`);
                // console.log(respone)
                // console.log(respone.data.nama)
                setNama(respone.data.nama);
            }
            catch(error){
                console.log(error);
            }
        }
        dataVaksin();
    }, []);

    const updateVaksin = () => {

        const inputdata = {
            id:id,
            nama:nama
        }
        try{
            const updateapi = axios.put(`http://localhost:8000/api/updatevaksin/${id}`, inputdata)
            console.log(updateapi)
        }
        catch(error){

        }
    }
    return (
        <div>
            <HeaderLogin />
            <h2>Update Data Vaksin </h2>
            <button onClick={() => navigate('/vaksin')}>Kembali</button>

            {formVaksin.nama}

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Jenis Vaksin : </label> 
                <input type="text" 
                className="form-control" 
                placeholder="jenis vaksin"
                value={nama}
                onChange={(e) => setNama(e.target.value)}></input> <br></br>

                <button onClick={updateVaksin}>SUBMIT</button>
            </div>


        </div>
    )
}


export default UpdateVaksin