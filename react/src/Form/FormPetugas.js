import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

const FormPetugas = () => {

    const [id, setID] = useState("")
    const [nama, setNama] = useState("")
    const [tanggal_lahir, setTanggalLahir] = useState("")
    const [tempat_lahir, setTempatLahir] = useState("")
    const [jenis_kelamin, setJenisKelamin] = useState("")
    const [jabatan, setJabatan] = useState("")
    const [no_telp, setNoTelp] = useState("")
    const [status, setStatus] = useState("")
    const navigate = useNavigate();

    async function addPetugas() {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('nama', nama);
        formData.append('tanggal_lahir', tanggal_lahir);
        formData.append('tempat_lahir', tempat_lahir);
        formData.append('jenis_kelamin', jenis_kelamin);
        formData.append('jabatan', jabatan);
        formData.append('no_telp', no_telp);
        formData.append('status', status);
        let result = await fetch("http://localhost:8000/api/formpetugas", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (
        <div>
            <HeaderLogin />
            <h2>Tambah Data Petugas</h2>
            <button onClick={() => navigate('/petugas')}>Kembali</button>
            <div className="wrapper">
                <hr></hr>
                <form className="form">
                    <label className="detail">Nama Petugas</label>
                    <input
                        type='text'
                        name="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Tempat Lahir</label>
                    <input
                        type='text'
                        name="tempat_lahir"
                        value={tempat_lahir}
                        onChange={(e) => setTempatLahir(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Tanggal Lahir</label>
                    <input
                        type='date'
                        name="tanggal_lahir"
                        value={tanggal_lahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}></input>
                    <br></br>
                    
                    <label className="detail">Jenis Kelamin</label>
                    <input
                        type='text'
                        name="jenis_kelamin"
                        value={jenis_kelamin}
                        onChange={(e) => setJenisKelamin(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Jabatan</label>
                    <input
                        type='text'
                        name="jabatan"
                        value={jabatan}
                        onChange={(e) => setJabatan(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Status</label>
                    <input
                        type='text'
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}></input>
                    <br></br>

                    <label className="detail">No Telp</label>
                    <input
                        type='text'
                        name="no_telp"
                        value={no_telp}
                        onChange={(e) => setNoTelp(e.target.value)}></input>
                    <br></br>

                    <button className="form" onClick={addPetugas} >SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}
export default FormPetugas

