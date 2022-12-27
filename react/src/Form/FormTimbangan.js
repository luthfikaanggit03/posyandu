import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

const FormTimbangan = () => {
    
    const [beratBadan, setBeratBadan] = useState("")
    const [tinggi, setTinggi] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [anak, setAnak] = useState("")
    const [umur, setUmur] = useState("")
    const navigate = useNavigate();

    async function addTimbangan() {
        const formData = new FormData();
        formData.append('beratBadan', beratBadan);
        formData.append('tanggal', tanggal);
        formData.append('anak', anak);
        formData.append('tinggi', tinggi);
        formData.append('umur', umur);
        let result = await fetch("http://localhost:8000/api/formtimbangan", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (
        <div>
            <HeaderLogin />
            <h2>Tambah Data Timbangan</h2>
            <button onClick={() => navigate('/timbangan')}>Kembali</button>
            <div className="wrapper">
                <hr></hr>
                <form className="form">
                    <label className="detail">Nama Anak</label>
                    <input
                        type='text'
                        name="anak"
                        value={anak}
                        onChange={(e) => setAnak(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Tanggal Timbang</label>
                    <input
                        type='date'
                        name="tanggal"
                        value={tanggal}
                        onChange={(e) => setTanggal(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Umur (bulan)</label>
                    <input
                        type='text'
                        name="umur"
                        value={umur}
                        onChange={(e) => setUmur(e.target.value)}></input>
                    <br></br>
                    
                    <label className="detail">Berat Badan (kg)</label>
                    <input
                        type='text'
                        name="beratBadan"
                        value={beratBadan}
                        onChange={(e) => setBeratBadan(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Tinggi Badan (cm)</label>
                    <input
                        type='text'
                        name="tinggi"
                        value={tinggi}
                        onChange={(e) => setTinggi(e.target.value)}></input>
                    <br></br>

                    <button className="form" onClick={addTimbangan} >SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}
export default FormTimbangan

