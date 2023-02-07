// Author: Mishell Yánez
// Based on: https://www.youtube.com/watch?v=nI8PYZNFtac & for React18 error of useEffect https://www.youtube.com/watch?v=81faZzp18NM
import { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import useAxiosPrivate from '../hooks/useAxiosPrivate';

const AdminInvoices = () => {
    const [invoices, setInvoices] = useState();
    const axiosPrivate = useAxiosPrivate();
    // For react18 changed useEffect to run Twice
    const effectRan = useRef(false)

    const [isLoading, setLoading ] = useState(true);
    const navigate = useNavigate();

    // Get data
    useEffect(()=>{
        if(effectRan.current===false){
            const controller = new AbortController(); // To cancel request if component unmounts
            
            const getInvoices = async () => {
                try{
                    const response = await axiosPrivate.get('/restaurant/invoices',{
                        
                    });
                    console.log(response.data)

                    setInvoices(response.data.map(invoice => (
                        {
                            id: Math.random() * (100000 - 1)+1,
                            clientIDCard: invoice.clientIDCard,
                            orderToGo: invoice.orderToGo,
                            invoiceDate: invoice.invoiceDate,
                            totalInvoice: invoice.totalInvoice.$numberDecimal,
                            paymentState: invoice.paymentState
                        }
                    )));
                    setLoading(false);
                } catch (error){
                    console.log(error);
                }
            }
            getInvoices();
            return () => {
                controller.abort();
                effectRan.current = true;
            }
        }
    }, [])

    // DataGrid
    const ModifyButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/modifyInvoice")} sx={{background:'#0087BD', color:"#fff", "&:hover": {color: '#fff', background: '#1F75FE'}, borderRadius: '0.5rem'}}>Modificar</Button>
        );
    };
    const DeleteButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/deleteInvoice")} sx={{background:'#8C1127', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Borrar</Button>
        );
    };

    const columns = [
        { field:'id', hide: true },
        { field:'clientIDCard', headerName:'Cliente', width: 200},
        { field:'orderToGo', headerName:'¿Para Llevar?', width: 150 },
        { field:'invoiceDate', headerName:'Fecha', width: 170 },
        { field:'totalInvoice', headerName:'Total', width: 150 },
        { field:'paymentState', headerName:'Estado de Pago', width: 180 },
        { field:'modifyButton', headerName:'Modificar', width:150, renderCell: () => <ModifyButton/> },
        { field:'deleteButton', headerName:'Borrar', width:150, renderCell: () => <DeleteButton/> }
    ];

    if (isLoading) {
        return <><h1>Cargando...</h1></>
    }

    return (
        <>
            <h1>Facturas</h1>
            <br/>
            <Button onClick={() => navigate("/newInvoice")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nueva Factura</Button>
            <br/>
            <Grid container justifyContent="center" sx={{ height: 500, width: '72%'}}> 
                <DataGrid columns={columns} rows={ invoices} className="dataGrid" sx={{alignSelf:"center"}}/>
            </Grid>
            <br/>
            <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Volver</Button>
        </>
    );
}

export default AdminInvoices