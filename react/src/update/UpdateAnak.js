import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateAnak = () => {
    const { id } = useParams();
    const [nama, setNama] = useState("");
    const [nama_ibu, setNamaIbu] = useState("");
    const [nama_ayah, setNamaAyah] = useState("");
    const [tempat_lahir, setTempatLahir] = useState("");
    const [tanggal_lahir, setTanggalLahir] = useState("");
    const [jenis_kelamin, setJenisKelamin] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();
    const [formAnak, setFormAnak] = useState({ nama: '', nama_ibu: "", nama_ayah: "", tempat_lahir: "", tanggal_lahir: "", jenis_kelamin: "", alamat: "" })

    useEffect(() => {
        const dataAnak = async () => {
            try {
                const respone = await axios.get(`http://localhost:8000/api/getanak/${id}`);
                // console.log(respone)
                // console.log(respone.data.nama)
                setNama(respone.data.nama);
                setNamaIbu(respone.data.nama_ibu);
                setNamaAyah(respone.data.nama_ayah);
                setTempatLahir(respone.data.tempat_lahir);
                setTanggalLahir(respone.data.tanggal_lahir);
                setJenisKelamin(respone.data.jenis_kelamin)
                setAlamat(respone.data.alamat)
            }
            catch (error) {
                console.log(error);
            }
        }
        dataAnak();
    }, []);

    const updateAnak = () => {

        const inputdata = {
            id: id,
            nama: nama,
            nama_ibu: nama_ibu,
            nama_ayah: nama_ayah,
            tempat_lahir: tempat_lahir,
            tanggal_lahir: tanggal_lahir,
            jenis_kelamin: jenis_kelamin,
            alamat: alamat
        }
        try {
            const updateapi = axios.put(`http://localhost:8000/api/updateanak/${id}`, inputdata)
            console.log(updateapi)
        }
        catch (error) {

        }
    }
    return (
        <div>
            <HeaderLogin />
            <h2>Update Data Anak </h2>
            <button onClick={() => navigate('/anak')}>Kembali</button>

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Nama Anak : </label>
                <input type="text"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}></input> <br></br>

                <label className="detail">Nama Ibu : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama anak"
                    value={nama_ibu}
                    onChange={(e) => setNamaIbu(e.target.value)}></input> <br></br>

                <label className="detail">Nama Ayah : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={nama_ayah}
                    onChange={(e) => setNamaAyah(e.target.value)}></input> <br></br>

                <label className="detail">Tempat lahir : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={tempat_lahir}
                    onChange={(e) => setTempatLahir(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Lahir : </label>
                <input type="date"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={tanggal_lahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}></input> <br></br>

                <label className="detail">Jenis Kelamin : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={jenis_kelamin}
                    onChange={(e) => setJenisKelamin(e.target.value)}></input> <br></br>

                <label className="detail">Alamat : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}></input> <br></br>

                <button onClick={updateAnak}>SUBMIT</button>
            </div>


        </div>
    )
}


export default UpdateAnak