import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const AdminUsers = () => {
    const navigate = useNavigate();

    // DataGrid
    const ModifyButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/modifyUser")} sx={{background:'#0087BD', color:"#fff", "&:hover": {color: '#fff', background: '#1F75FE'}, borderRadius: '0.5rem'}}>Modificar</Button>
        );
    };
    const DeleteButton = () => {
        const navigate = useNavigate();  
        return (
            <Button onClick={() => navigate("/deleteUser")} sx={{background:'#8C1127', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Borrar</Button>
        );
    };

    const columns = [
        { field:'id', hide: true },
        { field:'fullName', headerName:'Nombre', width: 170},
        { field:'email', headerName:'Email', width: 200 },
        { field:'username', headerName:'Usuario', width: 300 },
        { field:'modifyButton', headerName:'Modificar', width:150, renderCell: () => <ModifyButton/> },
        { field:'deleteButton', headerName:'Borrar', width:150, renderCell: () => <DeleteButton/> }
    ];

    return (
        <>
            <h1>Usuario</h1>
            <br/>
            <Button onClick={() => navigate("/newUser")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Usuario</Button>
            <br/>
            <Grid container justifyContent="center" sx={{ height: 500, width: '60%'}}> 
                <DataGrid columns={columns} rows={[]} className="dataGrid" sx={{alignSelf:"center"}}/>
            </Grid>
            <br/>
            <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Volver</Button>
        </>
    );
}

export default AdminUsers