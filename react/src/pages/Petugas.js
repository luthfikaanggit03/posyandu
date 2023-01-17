import React, { useEffect, useState, useRef } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../style/button.css';
import { useReactToPrint } from 'react-to-print';

function Petugas() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Data Petugas",
        onAfterPrint: () => alert('Print Sukses')
    });

    useEffect( () => {
        getData()
    }, [])

    async function getData() {
        let result = await fetch('http://localhost:8000/api/index');
        result = await result.json();
        setData(result)
        console.warn("data", data);
    }

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/deletepetugas/"+id, {
            method: 'DELETE'
        });
        result= await result.json();
        console.warn(result);
        alert("Data berhasil dihapus");
        getData();
    }

    return (
        <div>
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
            <HeaderLogin />
            <h2> DATA PETUGAS</h2>
            <button type="button" onClick={() => navigate('/form_petugas')}>Tambah Data</button>
            <br></br>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Petugas</th>
                        <th>Tempat Lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Jenis Kelamin</th>
                        <th>Jabatan</th>
                        <th>No Telp</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td>{item.tempat_lahir}</td>
                            <td>{item.tanggal_lahir}</td>
                            <td>{item.jenis_kelamin}</td>
                            <td>{item.jabatan}</td>
                            <td>(+62) {item.no_telp}</td>
                            <td>{item.status}</td>
                            <td><span onClick={() => {deleteOperation(item.id)}} className="delete">DELETE</span></td>
                            <td><Link to={`/update_petugas/${item.id}`} className="edit">UPDATE</Link></td> 
                        </tr>)
                    }
                </tbody>
            </Table>
            </div>
            <button onClick={handlePrint}>Print This Out</button>
        </div>
    )
}

export default Petugas