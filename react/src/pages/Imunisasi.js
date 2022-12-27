import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const Imunisasi = () => {

    const [imunisasi, setImunisasi] = useState([]);
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id
        },
        {
            name: "Jenis Imunisasi",
            selector: (row) => row.jenis
        },
        {
            name: "Tanggal Imunisasi",
            selector: (row) => row.tanggal
        },
        {
            name: "Nama Anak",
            selector: (row) => row.anak
        },
        {
            name: "Nama Petugas",
            selector: (row) => row.petugas
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-primary" onClick={() => alert(row.id)}>EDIT</button> 
        },
        {
            name:'Actions',
            cell: (row) => <button className="btn btn-danger" onClick={() => deleteImunisasi(row.id)}>DELETE</button> 
        }
    ]

    async function deleteImunisasi(id){
        let result = await fetch("http://localhost:8000/api/deleteimunisasi/"+id, {
            method:'DELETE'
        });
        result=await result.json();
        console.warn(result)
    }

    useEffect(() => {
        async function getImunisasi() {
            try {
                const imunisasi = await axios.get("http://localhost:8000/api/imunisasi")
                console.log(imunisasi.data)
                setImunisasi(imunisasi.data)
                setFilter(filter.data)
            } catch {
                console.error();
            }
        }
        getImunisasi()
    }, [])

    useEffect(() => {
        const result = imunisasi.filter(imunisasis => {
            return imunisasis.nama.toLowerCase().match(search.toLowerCase());
        })

        setFilter(result)
    }, [search])

    return (
        <div>
            <HeaderLogin />
            <div className="title">
                <h1>Data Imunisasi</h1>
            </div>
            <div className="tambah">
            <button type="button" onClick={() => navigate('/form_imunisasi')} >Tambah Data</button>
            </div>
            <DataTable columns={columns} data={imunisasi}
            pagination
            highlightOnHover
            subHeader
             />
        </div>
    )
}

export default Imunisasi