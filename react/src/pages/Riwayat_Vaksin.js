import React, { useEffect, useState, Fragment } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function RiwayatVaksin() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let result = await fetch('http://localhost:8000/api/laporan_vaksin');
        result = await result.json();
        setData(result)
        console.warn("data", data);
    }

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/deletelaporan/"+id, {
            method: 'DELETE'
        });
        result= await result.json();
        console.warn(result);
        alert("Data berhasil dihapus");
        getData();
    }
    
    return (
        <div>
            <HeaderLogin />
            <h2> LAPORAN VAKSIN</h2>
            <button type="button" onClick={() => navigate('/form_laporan')}>Tambah Data</button>
            <br></br>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jenis Layanan</th>
                        <th>Nama Vaksin</th>
                        <th>Tanggal Layanan</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.jenis}</td>
                            <td>{item.layanan}</td>
                            <td>{item.tanggal}</td>
                            <td><span onClick={() => {deleteOperation(item.id)}} className="delete">DELETE</span></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default RiwayatVaksin