import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

const FormVaksin = () => {

    const [nama, setNama] = useState("")
    const navigate = useNavigate(); 

    async function addVaksin() {
        const formData = new FormData();
        formData.append('nama', nama);
        let result = await fetch("http://localhost:8000/api/formvaksin", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (
        <div>
            <HeaderLogin />
            <h2>Tambah Data Vaksin</h2>
            <button onClick={() => navigate('/vaksin')}>Kembali</button>
            <div className="wrapper">
                <hr></hr>
                <form className="form">
                    <label className="detail">Jenis Vaksin</label>
                    <input
                        type='text'
                        name="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}></input>
                    <br></br>

                    <button className="form" onClick={addVaksin} >SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}
export default FormVaksin

