import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

function FormLaporan() {
    const [nama, setNama] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [pesan, setPesan] = useState("")
    const navigate = useNavigate();

    async function addLaporan() {
        console.warn(nama, tanggal, pesan);
        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('tanggal', tanggal);
        formData.append('pesan', pesan);
        let result = await fetch("http://localhost:8000/api/formlaporan", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (
        
        <div>
            <HeaderLogin />
            <h2>Tambah Data Kunjungan </h2>
            <button onClick={() => navigate('/riwayat_kunjungan')}>Kembali</button>
            
            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Nama : </label> 
                <input type="text" 
                className="form-control" 
                placeholder="nama "
                onChange={(e) => setNama(e.target.value)}></input> <br></br>

                <label className="detail">Pesan Kesan : </label>
                <input type="text" 
                className="form-control" 
                placeholder="pesan kesan"
                onChange={(e) => setPesan(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Kunjungan : </label>
                <input type="date" 
                className="form-control" 
                placeholder="tanggal kunjungan" 
                onChange={(e) => setTanggal(e.target.value)}></input> <br></br>

                <button onClick={addLaporan}>SUBMIT</button>
            </div>
            
        </div>
    )
}

export default FormLaporan