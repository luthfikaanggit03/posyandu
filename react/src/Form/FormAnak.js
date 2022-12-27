import React, { useState } from "react";
import HeaderLogin from "../component/Header-Login";
import '../style/Form.css';
import { useNavigate } from "react-router-dom";

const FormAnak = () => {
    
    const [nama, setNama] = useState("")
    const [nama_ibu, setNamaIbu] = useState("")
    const [nama_ayah, setNamaAyah] = useState("")
    const [jenis_kelamin, setJenisKelamin] = useState("")
    const [tanggal_lahir, setTanggalLahir] = useState("")
    const [tempat_lahir, setTempatLahir] = useState("")
    const [alamat, setAlamat] = useState("")
    const navigate = useNavigate();

    async function addAnak() {
        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('nama_ibu', nama_ibu);
        formData.append('nama_ayah', nama_ayah);
        formData.append('jenis_kelamin', jenis_kelamin);
        formData.append('tanggal_lahir', tanggal_lahir);
        formData.append('tempat_lahir', tempat_lahir);
        formData.append('alamat', alamat);
        let result = await fetch("http://localhost:8000/api/formanak", {
            method: 'POST',
            body: formData
        });
        alert("Data berhasil diinputkan");
    }

    return (
        <div>
            <HeaderLogin />
            <h2>Tambah Data Anak</h2>
            <button onClick={() => navigate('/anak')}>Kembali</button>
            <div className="wrapper">
                <hr></hr>
                <form className="form">
                    <label className="detail">Nama Anak</label>
                    <input
                        type='text'
                        name="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Nama Ibu</label>
                    <input
                        type='text'
                        name="nama_ibu"
                        value={nama_ibu}
                        onChange={(e) => setNamaIbu(e.target.value)}></input>
                    <br></br>

                    <label className="detail">Nama Ayah</label>
                    <input
                        type='text'
                        name="nama_ayah"
                        value={nama_ayah}
                        onChange={(e) => setNamaAyah(e.target.value)}></input>
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
                    
                    <label className="detail">Alamat</label>
                    <input
                        type='text'
                        name="alamat"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}></input>
                    <br></br>

                    <button className="form" onClick={addAnak} >SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}
export default FormAnak

