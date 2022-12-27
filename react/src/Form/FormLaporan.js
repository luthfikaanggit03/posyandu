import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

const FormLaporan = () => {

    const [id, setID] = useState("")
    const [jenis, setJenis] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [layanan, setLayanan] = useState("")
    const navigate = useNavigate();

    async function addLaporan() {
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
            <div className="wrapper">
                <hr></hr>
                <form className="form">
                    <label className="detail">Jenis Vaksin</label>
                    <input
                        type='text'
                        name="jenis"
                        value={jenis}
                        onChange={(e) => setJenis(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Tanggal Vaksin</label>
                    <input
                        type='date'
                        name="tanggal"
                        value={tanggal}
                        onChange={(e) => setTanggal(e.target.value)}></input>
                    <br></br>
                    
                    <label className="detail">Nama Layanan</label>
                    <input
                        type='text'
                        name="layanan"
                        value={layanan}
                        onChange={(e) => setLayanan(e.target.value)}></input>
                    <br></br>

                    <button className="form" onClick={addLaporan} >SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}
export default FormLaporan

