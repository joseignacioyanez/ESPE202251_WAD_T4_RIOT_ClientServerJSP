import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const NewUser = () => {
    const navigate = useNavigate();

    return (

        <section>
            <h1>Nuevo Usuario</h1>
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

                <label htmlFor="username">Nombre de Usuario:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    required
                />
                <br />
                <Button onClick={() => navigate("/adminUsers")} sx={{background:'#009F6B', color:"#fff", "&:hover": {color: '#fff', background: '#32CD32'}, borderRadius: '0.5rem'}}>Crear Nuevo Usuario</Button>
                <br />
                <Button onClick={() => {navigate(-1)}} sx={{background:'rgb(144,30,56)', color:"#fff", "&:hover": {color: '#fff', background: '#DA2C43'}, borderRadius: '0.5rem'}}>Cancelar</Button>
            </form>
        </section>

    )
}

export default NewUser;