import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const NewClient = () => {
    const navigate = useNavigate();

    return (

        <section>
            <h1>Nuevo Cliente</h1>
            <form onSubmit={navigate("#")}>

                <label htmlFor="fullName">Nombre Completo:</label>
                <input
                    type="text"
                    id="fullName"
                    autoComplete="off"
                    required
                />

            <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    required
                />

                <label htmlFor="idCard">Cédula/RUC:</label>
                <input
                    type="text"
                    id="idCard"
                    autoComplete="off"
                    required
                />
                <label htmlFor="cellphone">Teléfono:</label>
                <input
                    type="text"
                    id="cellphone"
                    autoComplete="off"
                    required
                />

                <label htmlFor="address">Dirección:</label>
                <input
                    type="text"
                    id="address"
                    required
                />
                <br />
                <Button onClick={() => navigate("/adminClients")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Cliente</Button>
                <br />
                <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    )
}

export default NewClient;