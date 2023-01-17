import React, { useEffect, useState } from "react";
import HeaderLogin from "../component/Header-Login";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTimbangan = () => {
    const { id } = useParams();
    const [tanggal, setTanggal] = useState("");
    const [beratBadan, setBeratBadan] = useState("")
    const [anak, setAnak] = useState("")
    const [umur, setUmur] = useState("")
    const [tinggi, setTinggi] = useState("");
    const navigate = useNavigate();
    const [FormAnak, setFormAnak] = useState({tanggal: "", beratBadan: "", anak: "", umur: "", tinggi: "" })

    useEffect(() => {
        const dataAnak = async () => {
            try {
                const respone = await axios.get(`http://localhost:8000/api/gettimbangan/${id}`);
                // console.log(respone)
                // console.log(respone.data.nama)
                setTanggal(respone.data.tanggal);
                setBeratBadan(respone.data.beratBadan);
                setAnak(respone.data.anak);
                setUmur(respone.data.umur);
                setTinggi(respone.data.tinggi);
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
            anak:anak,
            beratBadan:beratBadan,
            tanggal:tanggal,
            umur:umur,
            tinggi:tinggi
        }
        try {
            const updateapi = axios.put(`http://localhost:8000/api/updatetimbangan/${id}`, inputdata)
            console.log(updateapi)
        }
        catch (error) {

        }
    }
    return (
        <div>
            <HeaderLogin />
            <h2>Update Data Anak </h2>
            <button onClick={() => navigate('/timbangan')}>Kembali</button>

            <div className="col-sm-6 offset-sm-3">
                <br></br>
                <label className="detail">Nama Anak : </label>
                <input type="text"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={anak}
                    onChange={(e) => setAnak(e.target.value)}></input> <br></br>

                <label className="detail">Umur Anak (bulan) : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={umur}
                    onChange={(e) => setUmur(e.target.value)}></input> <br></br>

                <label className="detail">Tinggi Anak (cm) : </label>
                <input type="text"
                    className="form-control"
                    placeholder="jenis imunisasi"
                    value={tinggi}
                    onChange={(e) => setTinggi(e.target.value)}></input> <br></br>

                <label className="detail">Berat Anak (kg) : </label>
                <input type="text"
                    className="form-control"
                    placeholder="nama petugas"
                    value={beratBadan}
                    onChange={(e) => setBeratBadan(e.target.value)}></input> <br></br>

                <label className="detail">Tanggal Penimbangan : </label>
                <input type="date"
                    className="form-control"
                    placeholder="nama anak"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}></input> <br></br>

                <button onClick={updateAnak}>SUBMIT</button>
            </div>


        </div>
    )
}


export default UpdateTimbangan