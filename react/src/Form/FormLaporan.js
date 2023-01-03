import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

function FormLaporan() {
    const [jenis, setJenis] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [layanan, setLayanan] = useState("")
    const navigate = useNavigate();

    async function addLaporan() {
        console.warn(jenis, tanggal, layanan);
        const formData = new FormData();
        formData.append('jenis', jenis);
        formData.append('tanggal', tanggal);
        formData.append('layanan', layanan);
        let result = await fetch("http://localhost:8000/api/formlaporan", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (
        
        <div>
            <HeaderLogin />
            <h2>Tambah Data Laporan </h2>
            <button onClick={() => navigate('/riwayat_vaksin')}>Kembali</button>
            
            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Jenis Layanan : </label> 
                <input type="text" 
                className="form-control" 
                placeholder="jenis layanan"
                onChange={(e) => setLayanan(e.target.value)}></input> <br></br>

                <label className="detail">Nama Vaksin : </label>
                <input type="text" 
                className="form-control" 
                placeholder="nama vaksin"
                onChange={(e) => setJenis(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Layanan : </label>
                <input type="date" 
                className="form-control" 
                placeholder="tanggal layanan" 
                onChange={(e) => setTanggal(e.target.value)}></input> <br></br>

                <button onClick={addLaporan}>SUBMIT</button>
            </div>
            
        </div>
    )
}

export default FormLaporan