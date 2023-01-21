import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const AdminMenu = () => {
    const navigate = useNavigate();

    // DataGrid
    const ModifyButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/modifyMenuItem")} sx={{background:'#0087BD', color:"#fff", "&:hover": {color: '#fff', background: '#1F75FE'}, borderRadius: '0.5rem'}}>Modificar</Button>
        );
    };
    const DeleteButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/deleteMenuItem")} sx={{background:'#8C1127', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Borrar</Button>
        );
    };

    const columns = [
        { field:'id', hide: true },
        { field:'status', headerName:'Activo', width: 170},
        { field:'code', headerName:'Código', width: 200 },
        { field:'category', headerName:'Categoría', width: 300 },
        { field:'name', headerName:'Nombre', width: 200 },
        { field:'price', headerName:'Precio', width: 300 },
        { field:'paysTaxes', headerName:'Impuestos', width: 300 },
        { field:'modifyButton', headerName:'Modificar', width:150, renderCell: () => <ModifyButton/> },
        { field:'deleteButton', headerName:'Borrar', width:150, renderCell: () => <DeleteButton/> }
    ];

    return (
        <>
            <h1>Menú</h1>
            <br/>
            <Button onClick={() => navigate("/newMenuItem")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Ítem de Menú</Button>
            <br/>
            <Grid container justifyContent="center" sx={{ height: 500, width: '72%'}}> 
                <DataGrid columns={columns} rows={[]} className="dataGrid" sx={{alignSelf:"center"}}/>
            </Grid>
            <br/>
            <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Volver</Button>
        </>
    );
}

export default AdminMenu