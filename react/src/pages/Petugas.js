import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const Petugas = () => {

    const [petugas, setPetugas] = useState([]);
    const [filter, setFilter] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id
        },
        {
            name: "Nama Petugas",
            selector: (row) => row.nama
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
            name: "Jabatan",
            selector: (row) => row.jabatan
        },
        {
            name: "Jenis Kelamin",
            selector: (row) => row.jenis_kelamin
        },
        {
            name: "No Telp",
            selector: (row) => row.no_telp
        },
        {
            name: "Status",
            selector: (row) => row.status
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-primary" onClick={() => alert(row.id)}>EDIT</button> 
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-danger" onClick={() => deletePetugas(row.id)}>DELETE</button> 
        }
    ]

    async function deletePetugas(id){
        let result = await fetch("http://localhost:8000/api/deletepetugas/"+id, {
            method:'DELETE'
        });
        result=await result.json();
        console.warn(result)
    }

    useEffect(() => {
        async function getPetugas() {
            try {
                const petugas = await axios.get("http://localhost:8000/api/index")
                console.log(petugas.data)
                setPetugas(petugas.data)
                setFilter(filter.data)
            } catch {
                console.error();
            }
        }
        getPetugas()
    }, [])

    async function pencarian(key){
        console.warn(key)

        let result = await fetch ("http://localhost:8000/api/search/"+key);
        result=await result.json();
        console.warn(result)
        setData(result)
    }

    return (
        <div>
            <HeaderLogin />
            <br></br>
            <div className="title">
                <h1>Data Petugas</h1>
            </div>
            <div className="tambah">
                <button type="button" onClick={() => navigate('/form_petugas')} >Tambah Data</button>
            </div>
            <DataTable columns={columns} data={petugas}
            pagination
            highlightOnHover
            subHeader
            
             />
        </div>
    )
}

export default Petugas