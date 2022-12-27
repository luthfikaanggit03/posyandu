import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

const FormImunisasi = () => {

    const [id, setID] = useState("")
    const [jenis, setJenis] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [anak, setAnak] = useState("")
    const [petugas, setPetugas] = useState("")
    const navigate = useNavigate();

    async function addImunisasi() {
        const formData = new FormData();
        formData.append('jenis', jenis);
        formData.append('tanggal', tanggal);
        formData.append('anak', anak);
        formData.append('petugas', petugas);
        let result = await fetch("http://localhost:8000/api/formimunisasi", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (
        <div>
            <HeaderLogin />
            <h2>Tambah Data Imunisasi</h2>
            <button onClick={() => navigate('/imunisasi')}>Kembali</button>
            <div className="wrapper">
                <hr></hr>
                <form className="form">
                    <label className="detail">Jenis Imunisasi</label>
                    <input
                        type='text'
                        name="jenis"
                        value={jenis}
                        onChange={(e) => setJenis(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Tanggal Imunisasi</label>
                    <input
                        type='date'
                        name="tanggal"
                        value={tanggal}
                        onChange={(e) => setTanggal(e.target.value)}></input>
                    <br></br>
                    
                    <label className="detail">Nama Anak</label>
                    <input
                        type='text'
                        name="anak"
                        value={anak}
                        onChange={(e) => setAnak(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Nama Petugas</label>
                    <input
                        type='text'
                        name="petugas"
                        value={petugas}
                        onChange={(e) => setPetugas(e.target.value)}></input>
                    <br></br>

                    <button className="form" onClick={addImunisasi} >SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}
export default FormImunisasi

