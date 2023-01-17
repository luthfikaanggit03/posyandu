import React, { useEffect, useState, useRef } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useReactToPrint } from 'react-to-print';

function RiwayatVaksin() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Laporan Kunjungan",
        onAfterPrint: () => alert('Print Sukses')
    });

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
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
            <HeaderLogin />
            <h2> LAPORAN KUNJUNGAN</h2>
            <button type="button" onClick={() => navigate('/form_laporan')}>Tambah Data</button>
            <br></br>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Pesan Kesan</th>
                        <th>Tanggal Kunjungan</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td>{item.pesan}</td>
                            <td>{item.tanggal}</td>
                            <td><span onClick={() => {deleteOperation(item.id)}} className="delete">DELETE</span></td>
                        </tr>)
                    }
                </tbody>
            </Table>
            </div>
            <button onClick={handlePrint}>Print This Out</button>
        </div>
    )
}

export default RiwayatVaksin