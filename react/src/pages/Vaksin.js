import React, { useEffect, useState, useRef } from "react";
import HeaderLogin from "../component/Header-Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DataTable from 'react-data-table-component';
import { useNavigate, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../style/button.css';
import { useReactToPrint } from 'react-to-print';

function Vaksin() {
    const [datas, setData] = useState([])
    const [nama, setNama] = useState("");
    const [vaksinId, setVaksinId] = useState(null)
    
    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Data Vaksin",
        onAfterPrint: () => alert('Print Sukses')
    });

    useEffect(() => {
        getData();
    },[])

    function getData(){
        fetch ('http://localhost:8000/api/vaksin').then((result) => {
            result.json().then((resp) => {
               // console.warn("result", resp);
                setData(resp)
                setNama(resp[0].nama)
                setVaksinId(resp[0].id)
            })
        })
    }

    function deleteOperation(id){
        fetch("http://localhost:8000/api/deletevaksin/"+id, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getData();
            })
        })
    }
    
    return (
        <div>
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
            <HeaderLogin />
            <h2> DATA VAKSIN</h2>
            <button type="button" onClick={() => navigate('/form_vaksin')}>Tambah Data</button>
            <br></br>
        
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Jenis Vaksin</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((item, i) => 
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td><span onClick={() => {deleteOperation(item.id)}} className="delete">DELETE</span></td>
                            <td><Link to={`/update_vaksin/${item.id}`} className="edit">UPDATE</Link></td> 
                        </tr>)
                    }
                </tbody>
            </Table>
            </div>
            <button onClick={handlePrint}>Print This Out</button>
        </div>
    )
}

export default Vaksin
