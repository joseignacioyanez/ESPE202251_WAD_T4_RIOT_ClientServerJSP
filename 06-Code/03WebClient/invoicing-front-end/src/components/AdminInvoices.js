import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const AdminInvoices = () => {
    const navigate = useNavigate();

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
        { field:'clientIDCard', headerName:'Cliente', width: 170},
        { field:'orderToGo', headerName:'¿Para Llevar?', width: 200 },
        { field:'invoiceDate', headerName:'Fecha', width: 300 },
        { field:'totalInvoice', headerName:'Total', width: 200 },
        { field:'paymentState', headerName:'Estado de Pago', width: 300 },
        { field:'modifyButton', headerName:'Modificar', width:150, renderCell: () => <ModifyButton/> },
        { field:'deleteButton', headerName:'Borrar', width:150, renderCell: () => <DeleteButton/> }
    ];

    return (
        <>
            <h1>Facturas</h1>
            <br/>
            <Button onClick={() => navigate("/newInvoice")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nueva Factura</Button>
            <br/>
            <Grid container justifyContent="center" sx={{ height: 500, width: '72%'}}> 
                <DataGrid columns={columns} rows={[]} className="dataGrid" sx={{alignSelf:"center"}}/>
            </Grid>
            <br/>
            <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Volver</Button>
        </>
    );
}

export default AdminInvoices