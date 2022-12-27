import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const Anak = () => {

    const [anak, setAnak] = useState([]);
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const navigate = useNavigate()

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id
        },
        {
            name: "Nama Anak",
            selector: (row) => row.nama
        },
        {
            name: "Nama Ibu",
            selector: (row) => row.nama_ibu
        },
        {
            name: "Nama Ayah",
            selector: (row) => row.nama_ayah
        },
        {
            name: "Tempat Lahir",
            selector: (row) => row.tempat_lahir
        },
        {
            name: "Tanggal Lahir",
            selector: (row) => row.tanggal_lahir
        },
        {
            name: "Jenis Kelamin",
            selector: (row) => row.jenis_kelamin
        },
        {
            name: "Alamat",
            selector: (row) => row.alamat
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-primary" onClick={() => alert(row.id)}>EDIT</button> 
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-danger" onClick={() => alert(row.id)}>DELETE</button> 
        }
    ]

    const handleDelete = () => {};

    useEffect(() => {
        async function getAnak() {
            try {
                const anak = await axios.get("http://localhost:8000/api/anak")
                console.log(anak.data)
                setAnak(anak.data)
                setFilter(filter.data)
            } catch {
                console.error();
            }
        }
        getAnak()
    }, [])

    useEffect(() => {
        const result = anak.filter(anaks => {
            return anaks.nama.toLowerCase().match(search.toLowerCase());
        })

        setFilter(result)
    }, [search])

    return (
        <div>
            <HeaderLogin />
            <div className="title">
                <h1>Data Anak</h1>
            </div>
            <div className="tambah">
            <button type="button" onClick={() => navigate('/form_anak')} >Tambah Data</button>
            </div>
            <DataTable columns={columns} data={anak}
            pagination
            highlightOnHover
            subHeader
             />
        </div>
    )
}

export default Anak